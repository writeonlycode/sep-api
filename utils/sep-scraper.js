import * as path from "node:path";
import axios from "axios";
import { JSDOM } from "jsdom";
import { convert } from "html-to-text";

import Entry from "../models/entry.js";
import connect from "../db/connect.js";

export async function scrapeSEP() {
  const url = "https://plato.stanford.edu/contents.html";
  return fetchAndScrapeTOC(url);
}

async function fetchAndScrapeTOC(url) {
  console.log(`Fetching and scrapping ${url}...`);
  const response = await axios(url);

  const dom = new JSDOM(response.data);
  const content = dom.window.document.getElementById("content");
  const links = Array.from(content.querySelectorAll("a"));

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href")?.includes("entries/")) {
      // Scrape entry
      console.log(`Scraping entry: ${links[i].getAttribute("href")}`);
      const entry = await fetchAndScrapeEntry(links[i].getAttribute("href"));
      console.log(`Scraped entry ${i + 1} of ${links.length}: ${entry.identifier}`);

      // Insert entry into the database
      console.log("Inserting into the database...");
      await Entry.create(entry);
      console.log("Inserted!");
    } else {
      console.log(`Link ${i + 1} ins't an entry. Skipping...`);
    }
  }
  console.log("Finished scraping SEP!");
}

async function fetchAndScrapeEntry(relativeURL) {
  const absoluteURL = `https://plato.stanford.edu/${relativeURL}`;
  const entryResponse = await axios(absoluteURL);
  const entryDocument = new JSDOM(entryResponse.data).window.document;

  const identifier = path.basename(relativeURL);

  const title = entryDocument
    .querySelector("meta[property='citation_title']")
    ?.getAttribute("content");

  const author = entryDocument
    .querySelector("meta[property='citation_author']")
    ?.getAttribute("content");

  const firstPublishedDate = entryDocument
    .querySelector("meta[name='DCTERMS.issued']")
    ?.getAttribute("content");

  const lastUpdatedDate = entryDocument
    .querySelector("meta[name='DCTERMS.modified']")
    ?.getAttribute("content");

  const preambleHTML = entryDocument.querySelector("#preamble").innerHTML;
  const preamble = convert(preambleHTML, {
    ignoreHref: true,
    preserveNewlines: false,
    wordwrap: false,
  });

  return {
    identifier,
    title,
    author,
    firstPublishedDate,
    lastUpdatedDate,
    preamble,
  };
}

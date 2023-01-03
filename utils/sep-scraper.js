import * as path from "node:path";
import axios from "axios";
import { JSDOM } from "jsdom";
import { convert } from "html-to-text";

import Entry from "../models/entry.js";
import Archive from "../models/archive.js";

export async function scrapeSEP() {
  await fetchAndScrapeTOC("https://plato.stanford.edu/contents.html");
  await fetchAndScrapeArchives("https://plato.stanford.edu/archives/");
}

async function fetchAndScrapeTOC(url, archive) {
  console.log(`Fetching and scrapping ${url}...`);
  const response = await axios(url);

  const dom = new JSDOM(response.data);
  const content = dom.window.document.getElementById("content");
  const links = content ? Array.from(content.querySelectorAll("a")) : [];

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href")?.includes("entries/")) {
      // Scrape entry
      console.log(`Scraping entry: ${links[i].getAttribute("href")}`);
      const entry = await fetchAndScrapeEntry(
        links[i].getAttribute("href"),
        archive
      );
      console.log(
        `Scraped entry ${i + 1} of ${links.length}: ${entry.identifier}`
      );

      // Insert entry into the database
      console.log("Updating the database...");
      await Entry.findOneAndUpdate(
        { identifier: entry.identifier, archive: archive },
        entry,
        {
          upsert: true,
        }
      );
      console.log("Updated!");
    } else {
      console.log(`Link ${i + 1} isn't an entry. Skipping...`);
    }
  }
  console.log("Finished scraping SEP TOC!");
}

async function fetchAndScrapeArchives(url) {
  console.log(`Fetching and scrapping ${url}...`);
  const response = await axios(url);

  const dom = new JSDOM(response.data);
  const content = dom.window.document.getElementById("content");
  const links = content ? Array.from(content.querySelectorAll("#content > a")) : [];

  for (let i = 0; i < links.length; i++) {
    // Insert archive into the database
    const archive = {
      identifier: links[i].getAttribute("href").replaceAll("/", ""),
      title: links[i].textContent,
    };
    console.log("Updating the database...");
    await Archive.findOneAndUpdate(
      { identifier: archive.identifier },
      archive,
      {
        upsert: true,
      }
    );
    console.log("Updated!");

    await fetchAndScrapeTOC(
      `https://plato.stanford.edu/archives/${archive.identifier}/contents.html`,
      archive.identifier
    );
  }

  console.log(`Finished scraping ${url}!`);
}

async function fetchAndScrapeEntry(relativeURL, archive) {
  const absoluteURL = archive
    ? `https://plato.stanford.edu/archives/${archive}/${relativeURL}`
    : `https://plato.stanford.edu/${relativeURL}`;

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

  const preambleHTML = entryDocument.querySelector("#preamble")?.innerHTML;
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
    archive: `${archive}`,
  };
}

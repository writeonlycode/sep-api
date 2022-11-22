import * as path from "node:path";
import axios from "axios";
import { JSDOM } from "jsdom";
import { convert } from "html-to-text";

import Entry from "../models/entry.js";
import connect from "../db/connect.js";

export async function scrapeSEP() {
  const url = "https://plato.stanford.edu/contents.html";
  return await fetchAndScrapeTOC(url);
}

async function fetchAndScrapeTOC(url) {
  console.log(`Fetching and scrapping ${url}...`);
  const response = await axios(url);

  const dom = new JSDOM(response.data);
  const content = dom.window.document.getElementById("content");

  const links = Array.from(content.querySelectorAll("a"));
  const promises = [];
  let i = 0;

  links.forEach(async (link) => {
    if (link.getAttribute("href")?.includes("entries/")) {
      console.log(`Parsing entry: ${link.getAttribute("href")}`);
      const promise = fetchAndScrapeEntry(link.getAttribute("href"));

      promises.push(
        promise.then((e) => {
          console.log(
            `Parsed entry ${i++} of ${links.length}: ${e.identifier}`
          );

          return e;
        })
      );
    }
  });

  return Promise.all(promises);
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

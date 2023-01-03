import "express-async-errors";

import express from "express";
import * as cron from "node-cron";

import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";

import connect from "./db/connect.js";
import entries from "./routes/api/v1/entries.js";
import archives from "./routes/api/v1/archives.js";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

import { scrapeSEP } from "./utils/sep-scraper.js";

import Entry from "./models/entry.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);

// Routes
app.use("/api/v1/entries", entries);
app.use("/api/v1/archives", archives);

// Error Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

try {
  console.log("Connecting to the database...");
  await connect();
  console.log("Connected!");

  // scrape before starting up the server, if necessary
  const resources = await Entry.count();

  if (resources === 0) {
    console.log("Scrapping SEP and starting the server...");
    scrapeSEP();
  }

  // schedule a cron job to scrap the SEP website once a week
  cron.schedule("0 0 * * 0", () => {
    console.log("Scrapping SEP...");
    scrapeSEP();
  });

  // start the server
  console.log("Starting the server...");
  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `The server is now listening to port ${process.env.PORT || 5000}!`
    );
  });
} catch (e) {
  console.log(e);
}

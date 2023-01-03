import express from "express";
import { index, show, entriesIndex, entriesShow } from "../../../controllers/archives.js";

const routes = express.Router();

routes.get("/", index);
routes.get("/:identifier", show);
routes.get("/:identifier/entries", entriesIndex);
routes.get("/:identifier/entries/:entryidentifier", entriesShow);

export default routes;

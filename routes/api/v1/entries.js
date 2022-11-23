import express from "express";
import { index, show } from "../../../controllers/entries.js";

const routes = express.Router();

routes.get("/", index);
routes.get("/:identifier", show);

export default routes;

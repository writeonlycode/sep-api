import express from "express";
import { index, show } from "../../../controllers/entries.js";

const routes = express.Router();

routes.get("/", index);
routes.get("/:id", show);

export default routes;

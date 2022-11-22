import Entry from "../models/entry.js";

export async function index(req, res) {
  const resources = await Entry.find();
  return res.status(200).json(resources);
};

export async function show(req, res) {
  const resource = await Entry.findById(req.params.id);

  if (!resource) {
    throw new Error(`There is no resource with id ${req.params.id}`);
  }

  return res.status(200).json(resource);
};

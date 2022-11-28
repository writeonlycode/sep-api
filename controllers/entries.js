import Entry from "../models/entry.js";

export async function index(req, res) {
  // filter
  // limit
  // pagination
  const resources = await Entry.find();
  return res.status(200).json(resources);
};

export async function show(req, res) {
  const resource = await Entry.findOne({identifier: req.params.identifier});

  if (!resource) {
    throw new Error(`There is no resource with identifier ${req.params.identifier}`);
  }

  return res.status(200).json(resource);
};

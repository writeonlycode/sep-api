import Entry from "../models/entry.js";

export async function index(req, res) {
  const { title, author, sort, limit, page } = req.query;

  const filterObject = {};

  if (title) {
    filterObject.title = { $regex: title, $options: "i" };
  }

  if (author) {
    filterObject.author = { $regex: author, $options: "i" };
  }

  const optionsObject = {};

  if (page && limit) {
    optionsObject.skip = (page - 1) * limit;
  }

  let resources = Entry.find(filterObject, null, optionsObject);

  if (sort) {
    resources = resources.sort(sort);
  }

  if (limit) {
    resources.limit(limit);
  }

  const entries = await resources;
  return res.status(200).json(entries);
}

export async function show(req, res) {
  const resource = await Entry.findOne({ identifier: req.params.identifier });

  if (!resource) {
    throw new Error(
      `There is no resource with identifier ${req.params.identifier}`
    );
  }

  return res.status(200).json(resource);
}

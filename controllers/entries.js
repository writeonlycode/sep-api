import Entry from "../models/entry.js";

export async function index(req, res) {
  const { title, author, sort, limit } = req.query;

  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (author) {
    queryObject.author = { $regex: author, $options: "i" };
  }

  let resources = Entry.find(queryObject);

  if ( sort ) {
    resources = resources.sort(sort);
  }

  if ( limit ) {
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

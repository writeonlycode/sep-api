import Entry from "../models/entry.js";

export async function index(req, res) {
  const { title, author, sort, limit, page, fields, firstPublished } =
    req.query;

  const filterObject = {};

  if (title) {
    filterObject.title = { $regex: title, $options: "i" };
  }

  if (author) {
    filterObject.author = { $regex: author, $options: "i" };
  }

  if (firstPublished) {
    filterObject.firstPublishedDate = firstPublished;
  }

  if (lastUpdated) {
    filterObject.lastUpdatedDate = firstPublished;
  }

  let resources = Entry.find(filterObject);

  const limitOption = Number(limit) || 10;
  const pageOption = Number(page) || 1;

  const skipOption = (pageOption - 1) * limitOption;

  resources.limit(limitOption).skip(skipOption);

  if (sort) {
    resources = resources.sort(sort.split(",").join(" "));
  }

  if (fields) {
    resources.select(fields.split(",").join(" "));
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

import Archive from "../models/archive.js";
import Entry from "../models/entry.js";

export async function index(req, res) {
  const archives = await Archive.find();
  return res.status(200).json(archives);
}

export async function show(req, res) {
  const archive = await Archive.findOne({ identifier: req.params.identifier });

  if (!archive) {
    throw new Error(
      `There is no archive with identifier ${req.params.identifier}`
    );
  }

  return res.status(200).json(archive);
}

export async function entriesIndex(req, res) {
  const {
    title,
    author,
    sort,
    limit,
    page,
    fields,
    firstPublished,
    lastUpdated,
  } = req.query;

  const filterObject = { archive: req.params.identifier };

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

export async function entriesShow(req, res) {
  const entry = await Entry.findOne({
    archive: req.params.identifier,
    identifier: req.params.entryidentifier,
  });

  if (!entry) {
    throw new Error(
      `There is no archive with identifier ${req.params.identifier}`
    );
  }

  return res.status(200).json(entry);
}

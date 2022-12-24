import { Schema, model } from "mongoose";

const EntrySchema = new Schema({
  identifier: {
    type: String,
    required: [true, "Identifier can't be empty."],
    trim: true,
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Title can't be empty."],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author can't be empty."]
  },
  firstPublishedDate: {
    type: Date,
    required: [true, "First published can't be empty."]
  },
  lastUpdatedDate: {
    type: Date,
    required: [true, "First published can't be empty."]
  },
  preamble: String,
  // preambleHTML: { type: String }
  // contentHTML: { type: String }
  // bibliography: {
  //   type: [String],
  //   required: [true, "Bibliography can't be empty."]
  // },
  // relatedEntries: [String],
});

export default model("Entry", EntrySchema);

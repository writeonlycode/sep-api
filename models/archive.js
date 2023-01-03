import { Schema, model } from "mongoose";

const ArchiveSchema = new Schema({
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
});

export default model("Archive", ArchiveSchema);

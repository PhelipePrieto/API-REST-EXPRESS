import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    publishing: { type: String },
    price: { type: Number },
    page_number: { type: Number },
    author: authorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model("livros", bookSchema);

export default book;

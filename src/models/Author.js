import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: [true, "Nome do(a) Autor(a) é obrigatório"],
    },
    nationality: { type: String },
  },
  { versionKey: false }
);

const author = mongoose.model("autores", authorSchema);

export { author, authorSchema };

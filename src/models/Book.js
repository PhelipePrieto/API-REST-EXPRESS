import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
      type: String,
      required: [true, "O nome do livro é um campo obrigatório"],
    },
    publishing: {
      type: String,
      require: [true, "É preciso informar a editora do Livro"],
    },
    price: { type: Number },
    page_number: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 50 && valor <= 5000;
        },
        message:
          "O número de págianas deve estar entre 10 e 5000. Valor fornecido {VALOR}",
      },
    },
    author: authorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model("livros", bookSchema);

export default book;

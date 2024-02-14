import { author } from "../models/Author.js";
import book from "../models/Book.js";

class bookController {
  static async listBooks(req, res) {
    const listBooks = await book.find({});

    try {
      res.status(200).json(listBooks);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha inesperada na requisição` });
    }
  }
  static async listBookForId(req, res) {
    const id = req.params.id;
    try {
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha inesperada na requisição` });
    }
  }

  static async createBook(req, res) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.author);
      const bookComplete = { ...newBook, author: { ...authorFound._doc } };
      const bookCreate = await book.create(bookComplete);
      res.status(201).json({ messege: "Criado com sucesso", book: bookCreate });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} -  falha ao cadastrarlivro` });
    }
  }

  static async updateBook(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messege: "Atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha inesperada na atualização`,
      });
    }
  }

  static async deleteBook(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndDelete(id);
      res.status(200).json({ messege: "Excluido com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha inesperada na exclusão do registro`,
      });
    }
  }

  static async listBooksByPublishing(req, res) {
    const publishing = req.query.publishing;

    try {
      const booksByPublishing = await book.find({ publishing: publishing });
      res.status(200).json(booksByPublishing);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha inesperada na busca do registro`,
      });
    }
  }
}

export default bookController;

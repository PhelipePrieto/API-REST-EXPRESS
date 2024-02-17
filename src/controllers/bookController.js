import { author } from "../models/Author.js";
import book from "../models/Book.js";

class bookController {
  static async listBooks(req, res, next) {
    const listBooks = await book.find({});

    try {
      res.status(200).json(listBooks);
    } catch (error) {
      next(error);
    }
  }
  static async listBookForId(req, res, next) {
    const id = req.params.id;
    try {
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (error) {
      next(error);
    }
  }

  static async createBook(req, res, next) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.author);
      const bookComplete = { ...newBook, author: { ...authorFound._doc } };
      const bookCreate = await book.create(bookComplete);
      res.status(201).json({ messege: "Criado com sucesso", book: bookCreate });
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(req, res, next) {
    const id = req.params.id;
    try {
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messege: "Atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req, res, next) {
    const id = req.params.id;
    try {
      await book.findByIdAndDelete(id);
      res.status(200).json({ messege: "Excluido com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async listBooksByPublishing(req, res, next) {
    const publishing = req.query.publishing;

    try {
      const booksByPublishing = await book.find({ publishing: publishing });
      res.status(200).json(booksByPublishing);
    } catch (error) {
      next(error);
    }
  }
}

export default bookController;

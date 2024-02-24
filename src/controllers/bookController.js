import error404 from "../errors/error404.js";
import { author, book } from "../models/index.js";

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
      if (bookFound !== null) {
        res.status(200).json(bookFound);
      } else {
        next(new error404("Falha na requisição: ID do livro não encontrado"));
      }
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
    try {
      const id = req.params.id;
      const bookFound = await book.findById(id);

      if (bookFound !== null) {
        await book.findByIdAndUpdate(id, req.body);
        res.status(200).json({ messege: "Atualizado com sucesso" });
      } else {
        next(new error404("Falha na requisição: ID do livro não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req, res, next) {
    const id = req.params.id;
    try {
      const bookFound = await book.findById(id);

      if (bookFound !== null) {
        await book.findByIdAndDelete(id);
        res.status(200).json({ messege: "Excluido com sucesso" });
      } else {
        next(new error404("Falha na requisição: ID do livro não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listBooksByFilter(req, res, next) {
    try {
      const { publishing, title } = req.query;
      // const regex = new RegExp(title, "i");
      const search = {};

      if (publishing) search.publishing = { $regex: publishing, $option: "i" };
      if (title) search.title = { $regex: title, $option: "i" };

      const booksByPublishing = await book.find(search);

      res.status(200).json(booksByPublishing);
    } catch (error) {
      next(error);
    }
  }
}

export default bookController;

import error404 from "../errors/error404.js";
import { author } from "../models/Author.js";

class authorController {
  static async listAuthors(req, res, next) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      next(error);
    }
  }
  static async listAuthorForId(req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);

      console.log(authorFound);

      if (authorFound !== null) {
        res.status(200).json(authorFound);
      } else {
        next(new error404("Falha na requisição: ID do Autor não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async createAuthor(req, res, next) {
    try {
      const newAuthor = await author.create(req.body);

      res
        .status(201)
        .json({ messege: "Criado com sucesso", author: newAuthor });
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);

      if (authorFound !== null) {
        await author.findByIdAndUpdate(id, req.body);
        res.status(200).json({ messege: "Atualizado com sucesso" });
      } else {
        new error404("Falha na requisição: ID do Autor não encontrado");
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);

      if (authorFound !== null) {
        await author.findByIdAndDelete(id);
        res.status(200).json({ messege: "Excluido com sucesso" });
      } else {
        new error404("Falha na requisição: ID do Autor não encontrado");
      }
    } catch (error) {
      next(error);
    }
  }
}

export default authorController;

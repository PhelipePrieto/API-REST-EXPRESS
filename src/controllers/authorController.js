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
        res.status(404).json({
          message: " ID não encontrado -  Falha inesperada na requisição",
        });
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
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messege: "Atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ messege: "Excluido com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default authorController;

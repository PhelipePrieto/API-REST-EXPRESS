import { author } from "../models/Author.js";

class authorController {
  static async listAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha inesperada na requisição` });
    }
  }
  static async listAuthorForId(req, res) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);
      res.status(200).json(authorFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha inesperada na requisição` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);

      res
        .status(201)
        .json({ messege: "Criado com sucesso", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} -  falha ao cadastrar Autor` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messege: "Atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha inesperada na atualização`,
      });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ messege: "Excluido com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha inesperada na exclusão do registro`,
      });
    }
  }
}

export default authorController;

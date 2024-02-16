import mongoose from "mongoose";
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

      console.log(authorFound);

      if (authorFound !== null) {
        res.status(200).json(authorFound);
      } else {
        res.status(404).json({
          message: " ID não encontrado -  Falha inesperada na requisição",
        });
      }
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: "Um ou mais dados fornecidos estão incorretos" });
      } else {
        res.status(500).send({ message: "erro interno do servidor" });
      }
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

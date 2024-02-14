import express from "express";
import authorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/autores", authorController.listAuthors);
routes.get("/autores/:id", authorController.listAuthorForId);
routes.put("/autores/:id", authorController.updateAuthor);
routes.post("/autores", authorController.createAuthor);
routes.delete("/autores/:id", authorController.deleteAuthor);

export default routes;

import express from "express";
import bookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", bookController.listBooks);
routes.get("/livros/:busca", bookController.listBooksByPublishing);
routes.get("/livros/:id", bookController.listBookForId);
routes.put("/livros/:id", bookController.updateBook);
routes.post("/livros", bookController.createBook);
routes.delete("/livros/:id", bookController.deleteBook);

export default routes;

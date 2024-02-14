import express from "express";
import book from "./bookRoutes.js";
import author from "./authorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Rota / em funcionamento");
  });

  app.use(express.json(), book, author);
};

export default routes;

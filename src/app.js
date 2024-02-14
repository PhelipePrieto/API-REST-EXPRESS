import express from "express";
import conectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conection = await conectDatabase();

conection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

conection.once("open", () => {
  console.log("Conecção realizada com sucesso");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  livros.splice(index, 1);

  res.status(200).send("Remoção reaalizada!");
});

export default app;

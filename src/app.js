import express from "express";
import conectDatabase from "./config/dbconnect.js";
import book from "./models/Book.js";

const conection = await conectDatabase();

conection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

conection.once("open", () => {
  console.log("Conecção realizada com sucesso");
});

const app = express();
app.use(express.json());

// ROTA RAIZ DA APLICAÇÃO
app.get("/", (req, res) => {
  res.status(200).send("Curso de node.JS");
});

//ROTA QUE BUSCA TODOS OS LIVROS
app.get("/livros", async (req, res) => {
  const listBooks = await book.find({});
  //res.status(200).send("rota encontrada");
  res.status(200).json(listBooks);
});

//ROTA QUE FAZ BUSCA DE LIVROS POR ID
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

//ROTA PARA ALTERAR LIVROS
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  livros[index].name = req.body.name;

  res.status(200).json(livros);
});

//ROTA DE CADASTRO DE LIVROS
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Cadastro realizado com sucesso");
});

//rota para deletar livro

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  livros.splice(index, 1);

  res.status(200).send("Remoção reaalizada!");
});

export default app;

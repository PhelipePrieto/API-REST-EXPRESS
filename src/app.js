import express from "express";

const app = express();
app.use(express.json());

const livros = [
  { id: 1, name: "O senhor dos aneis" },
  { id: 2, name: "O senhor dos aneis 2" },
];

//função para realizar a busca do registro por parametro
function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

// ROTA RAIZ DA APLICAÇÃO
app.get("/", (req, res) => {
  res.send(200).send("Curso de node.JS");
});

//ROTA QUE BUSCA TODOS OS LIVROS
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
});

export default app;

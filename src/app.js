import express from "express";
import conectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import handler404 from "./middlewares/handler404.js";
const conection = await conectDatabase();

conection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

conection.once("open", () => {
  console.log("Conecção realizada com sucesso");
});

const app = express();
app.use(express.json());
routes(app);
app.use(handler404);

app.use(errorHandler);

export default app;

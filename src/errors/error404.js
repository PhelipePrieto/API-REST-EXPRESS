import ErrorBase from "./error.js";

class error404 extends ErrorBase {
  constructor(message = "Pagina não encontrada") {
    super(message, 404);
  }
}

export default error404;

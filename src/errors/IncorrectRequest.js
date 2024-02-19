import ErrorBase from "./error.js";

class IncorrectRequest extends ErrorBase {
  constructor(message = "Um ou mais dados fornecidos estão incorretos") {
    super(message, 400);
  }
}

export default IncorrectRequest;

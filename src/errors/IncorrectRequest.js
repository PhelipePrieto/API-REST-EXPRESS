import Error from "./error.js";

class IncorrectRequest extends Error {
  constructor(message = "Um ou mais dados fornecidos estão incorretos") {
    super(message, 400);
  }
}

export default IncorrectRequest;

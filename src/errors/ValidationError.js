import IncorrectRequest from "./Incorrectrequest.js";

class ValidationError extends IncorrectRequest {
  constructor(error) {
    console.log(error.errors);

    const errorMmessage = Object.values(error.errors)
      .map((error) => error.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${errorMmessage}`);
  }
}

export default ValidationError;

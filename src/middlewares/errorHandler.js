import mongoose from "mongoose";
import Error from "../errors/error.js";
import IncorrectRequest from "../errors/Incorrectrequest.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  console.log(error);

  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else {
    new Error().sendResponse(res);
  }
}

export default errorHandler;

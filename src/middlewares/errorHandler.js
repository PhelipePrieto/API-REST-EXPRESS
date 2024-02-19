import mongoose from "mongoose";
import ErrorBase from "../errors/error.js";
import IncorrectRequest from "../errors/Incorrectrequest.js";
import ValidationError from "../errors/ValidationError.js";
import error404 from "../errors/error404.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  console.log(error);

  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else if (error instanceof error404) {
    error.sendResponse(res);
  } else {
    new ErrorBase().sendResponse(res);
  }
}

export default errorHandler;

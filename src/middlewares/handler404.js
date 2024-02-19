import error404 from "../errors/error404.js";

function handler404(req, res, next) {
  const error = new error404();
  next(error);
}

export default handler404;

import { StatusCodes } from "http-status-codes";

const notFoundMiddleware = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    mssg: `Route not found - ${req.originalUrl}`,
  });
};

export default notFoundMiddleware;

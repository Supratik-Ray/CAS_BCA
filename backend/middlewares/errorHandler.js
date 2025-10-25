//duplicate email error
//casting error
//custom thrown error
//internal server error

import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    mssg: err.message || "Something went wrong! Please try again later",
  };

  if (err.code && err.code === 11000) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.mssg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
  }

  res
    .status(customError.statusCode)
    .json({ success: false, mssg: customError.mssg });
};

export default errorHandlerMiddleware;

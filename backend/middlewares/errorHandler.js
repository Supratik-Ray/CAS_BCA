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

  res
    .status(customError.statusCode)
    .json({ success: false, mssg: customError.mssg });
};

export default errorHandlerMiddleware;

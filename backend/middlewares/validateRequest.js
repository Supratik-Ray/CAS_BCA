import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsObj = {};
    errors.array().forEach((err) => {
      const field = err.path;
      if (field in errorsObj) {
        errorsObj[field].push(err.msg);
      } else {
        errorsObj[field] = [err.msg];
      }
    });
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      errors: errorsObj,
    });
  }

  next();
};

export default validateRequest;

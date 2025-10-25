import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export default BadRequestError;

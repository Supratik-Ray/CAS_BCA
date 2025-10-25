import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.js";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(StatusCodes.NOT_FOUND, message);
  }
}

export default NotFoundError;

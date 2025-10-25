import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.js";

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}

export default UnauthenticatedError;

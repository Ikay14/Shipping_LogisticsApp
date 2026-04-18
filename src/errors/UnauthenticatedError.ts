import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";

export class UnauthenticatedError extends ApiError {
  constructor(message = "Authentication invalid") {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

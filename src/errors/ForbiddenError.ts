import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";

export class ForbiddenError extends ApiError {
  constructor(message = "You do not have permission to perform this action") {
    super(message, StatusCodes.FORBIDDEN);
  }
}

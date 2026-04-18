import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

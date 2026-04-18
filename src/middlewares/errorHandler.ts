import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Prisma } from "../generated/prisma/client";
import { ApiError } from "../errors/ApiError";
import { env } from "../config/env";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  // Known operational errors (ApiError subclasses)
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  // Prisma: unique constraint violation
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      const fields = (err.meta?.target as string[])?.join(", ") ?? "field";
      res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: `A record with this ${fields} already exists`,
      });
      return;
    }

    // Prisma: record not found (delete / update on missing row)
    if (err.code === "P2025") {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Record not found",
      });
      return;
    }

    // Prisma: foreign key constraint fails
    if (err.code === "P2003") {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Related record does not exist",
      });
      return;
    }
  }

  // Prisma: validation error
  if (err instanceof Prisma.PrismaClientValidationError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Invalid data provided",
    });
    return;
  }

  // Unknown / unexpected errors — never leak internals in production
  console.error("Unhandled error:", err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message:
      env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong. Please try again later.",
  });
};

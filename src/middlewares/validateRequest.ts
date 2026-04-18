import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { BadRequestError } from "../errors/BadRequestError";

/**
 * Generic Zod validation middleware.
 * Validates req.body, req.query, and req.params against the given schema.
 * Applies parsed/transformed values back onto the request object.
 *
 * Usage: router.post('/', validateRequest(createOrderSchema), controller.create)
 */
export const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // Apply parsed + transformed values back to the request
      if (result.body !== undefined) req.body = result.body;
      if (result.query !== undefined) req.query = result.query;
      if (result.params !== undefined) req.params = result.params;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.errors
          .map((e) => `${e.path.slice(1).join(".")}: ${e.message}`)
          .join("; ");
        next(new BadRequestError(message));
      } else {
        next(error);
      }
    }
  };

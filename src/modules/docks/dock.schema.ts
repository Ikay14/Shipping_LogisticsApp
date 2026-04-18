import { z } from "zod";
import { DockStatus } from "@prisma/client";

export const createDockSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required" })
      .min(2, "name must be at least 2 characters")
      .max(100),
    code: z
      .string({ required_error: "code is required" })
      .min(2, "code must be at least 2 characters")
      .max(20)
      .transform((v) => v.toUpperCase()),
    location: z
      .string({ required_error: "location is required" })
      .min(3, "location must be at least 3 characters"),
    address: z.string().optional(),
    capacity: z.number().int().positive().default(100),
    description: z.string().max(500).optional(),
    managerId: z.string().uuid("managerId must be a valid UUID").optional(),
  }),
});

export const updateDockSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    name: z.string().min(2).max(100).optional(),
    code: z
      .string()
      .min(2)
      .max(20)
      .transform((v) => v.toUpperCase())
      .optional(),
    status: z.nativeEnum(DockStatus).optional(),
    location: z.string().min(3).optional(),
    address: z.string().optional(),
    capacity: z.number().int().positive().optional(),
    description: z.string().max(500).optional(),
    managerId: z.string().uuid().optional(),
  }),
});

export const idParamSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
});

export type CreateDockInput = z.infer<typeof createDockSchema>["body"];
export type UpdateDockInput = z.infer<typeof updateDockSchema>["body"];

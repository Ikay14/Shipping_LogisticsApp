import { z } from "zod";
import { UserRole } from "../../generated/prisma/client";

export const getUsersSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    role: z.nativeEnum(UserRole).optional(),
    isActive: z
      .enum(["true", "false"])
      .transform((v) => v === "true")
      .optional(),
    search: z.string().optional(),
  }),
});

export const userIdParamSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
});

export const updateUserRoleSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    role: z.nativeEnum(UserRole, { error: "Valid role is required" }),
  }),
});

export const updateUserStatusSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    isActive: z.boolean({ error: "isActive boolean is required" }),
  }),
});

export type GetUsersQuery = z.infer<typeof getUsersSchema>["query"];

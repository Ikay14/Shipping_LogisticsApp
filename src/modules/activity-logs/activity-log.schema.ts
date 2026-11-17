import { z } from "zod";

export const getActivityLogsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    userId: z.string().uuid("userId must be a valid UUID").optional(),
  }),
});

export const getMyActivityLogsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
});

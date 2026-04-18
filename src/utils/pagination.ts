/**
 * Generic Pagination Input structure
 */
export interface PaginationInput {
  page?: string | number;
  limit?: string | number;
}

/**
 * Standardized Pagination Metadata structure
 */
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  pos: number; // Offset position globally
  delta: number; // Count of items in this specific page context
}

/**
 * Common Pagination Result
 */
export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

/**
 * Computes `skip` and `take` strictly bounded for Prisma
 * Caps limit automatically to prevent unbounded queries (OOM protection)
 */
export const getPaginationOptions = (
  query: PaginationInput,
  defaultLimit = 10,
  maxLimit = 100,
) => {
  const page = Math.max(1, parseInt(String(query.page ?? "1"), 10) || 1);
  const limit = Math.min(
    maxLimit,
    Math.max(
      1,
      parseInt(String(query.limit ?? defaultLimit), 10) || defaultLimit,
    ),
  );
  const skip = (page - 1) * limit;

  return { page, limit, skip, take: limit };
};

/**
 * Formats data and total count into the standardized shape requested by the client
 */
export const formatPaginatedResult = <T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): PaginatedResult<T> => {
  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      pos: (page - 1) * limit,
      delta: data.length,
    },
  };
};

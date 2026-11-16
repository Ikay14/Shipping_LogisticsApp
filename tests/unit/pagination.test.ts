import { describe, it, expect } from "vitest";
import {
  getPaginationOptions,
  formatPaginatedResult,
} from "../../src/utils/pagination";

describe("Pagination utils", () => {
  it("clamps page < 1 and limit > maxLimit", () => {
    expect(getPaginationOptions({ page: "-5", limit: "999" }, 10, 50)).toEqual({
      page: 1,
      limit: 50,
      skip: 0,
      take: 50,
    });
  });

  it("computes skip and metadata accurately", () => {
    const opts = getPaginationOptions({ page: 3, limit: 15 }, 10, 100);
    expect(opts).toEqual({ page: 3, limit: 15, skip: 30, take: 15 });

    const formatted = formatPaginatedResult(["a", "b"], 32, opts.page, opts.limit);
    expect(formatted.meta).toEqual({
      total: 32,
      page: 3,
      limit: 15,
      totalPages: 3,
      pos: 30,
      delta: 2,
    });
  });
});

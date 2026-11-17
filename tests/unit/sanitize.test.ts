import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { sanitize } from "../../src/middlewares/sanitize";

describe("sanitize middleware", () => {
  it("strips HTML/script tags and trims nested strings", () => {
    const req = {
      body: {
        name: "  <script>alert(1)</script>Alice  ",
        nested: ["<b>Bob</b>"],
      },
      query: { search: "<img src=x onerror=alert(1)>track" },
      params: { id: "  123  " },
    } as unknown as Request;
    const next = vi.fn() as unknown as NextFunction;

    sanitize(req, {} as Response, next);

    expect(req.body).toEqual({ name: "Alice", nested: ["Bob"] });
    expect(req.query).toEqual({ search: "track" });
    expect(req.params).toEqual({ id: "123" });
    expect(next).toHaveBeenCalledOnce();
  });
});

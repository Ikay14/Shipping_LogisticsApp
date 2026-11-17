import { describe, it, expect } from "vitest";
import { signToken, signRefreshToken, verifyToken } from "../../src/utils/jwt";

describe("JWT utils", () => {
  const payload = {
    id: "user-123",
    userId: "user-123",
    name: "Test User",
    role: "CUSTOMER",
  };

  it("signs and verifies access tokens with type=access", () => {
    const token = signToken(payload);
    const decoded = verifyToken(token);
    expect(decoded.userId).toBe("user-123");
    expect(decoded.type).toBe("access");
  });

  it("signs and verifies refresh tokens with type=refresh", () => {
    const token = signRefreshToken(payload);
    const decoded = verifyToken(token);
    expect(decoded.userId).toBe("user-123");
    expect(decoded.type).toBe("refresh");
  });
});

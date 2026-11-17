import { describe, it, expect } from "vitest";
import { PasswordUtils } from "../../src/utils/password";

describe("PasswordUtils", () => {
  it("accepts a strong password", () => {
    expect(PasswordUtils.validate("Str0ng!Pass#2026")).toEqual([]);
  });

  it("rejects short or missing character classes", () => {
    const errors = PasswordUtils.validate("weak");
    expect(errors.length).toBeGreaterThanOrEqual(4);
  });

  it("rejects common passwords", () => {
    const errors = PasswordUtils.validate("Password1!");
    expect(errors).toContain(
      "Password is too common. Please choose a stronger password.",
    );
  });

  it("hashes and verifies passwords correctly", async () => {
    const hash = await PasswordUtils.hash("MyS3cur3!Pass");
    expect(hash).not.toBe("MyS3cur3!Pass");
    await expect(PasswordUtils.compare("MyS3cur3!Pass", hash)).resolves.toBe(
      true,
    );
    await expect(PasswordUtils.compare("WrongPass1!", hash)).resolves.toBe(
      false,
    );
  });
});

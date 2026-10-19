import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
import process from "node:process";

export const ACCESS_COOKIE = "wedding_access";
export const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

function getSessionSecret(): string {
  const secret = import.meta.env.WEDDING_SESSION_SECRET;

  if (!secret) {
    throw new Error("WEDDING_SESSION_SECRET is not configured");
  }

  return secret;
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a, "utf8");
  const right = Buffer.from(b, "utf8");

  return left.length === right.length && timingSafeEqual(left, right);
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

export function createSessionToken(): string {
  const expiresAt = String(Date.now() + SESSION_MAX_AGE * 1000);

  return `${expiresAt}.${sign(expiresAt)}`;
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [expiresAt, signature] = parts;

  if (!/^\d+$/.test(expiresAt) || !signature) {
    return false;
  }

  if (!Number.isSafeInteger(Number(expiresAt))) {
    return false;
  }

  if (Number(expiresAt) <= Date.now()) {
    return false;
  }

  return safeEqual(signature, sign(expiresAt));
}

export function isCorrectAccessCode(submitted: string): boolean {
  const expected = import.meta.env.WEDDING_ACCESS_CODE;

  if (!expected) {
    throw new Error("WEDDING_ACCESS_CODE is not configured");
  }

  return safeEqual(submitted, expected);
}

export function safeReturnTo(value: unknown): string {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\")
  ) {
    return "/";
  }

  const pathname = value.split("?")[0].replace(/\/+$/, "") || "/";

  if (pathname === "/access" || pathname === "/api/access") {
    return "/";
  }

  return value;
}

// Server-only admin session. Required env: ADMIN_PASSWORD.
// The session cookie is an expiry timestamp signed with a key derived from the password,
// so changing ADMIN_PASSWORD signs every admin out.
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "webreid_admin";
const SESSION_HOURS = 12;

function password() {
  const pw = process.env.ADMIN_PASSWORD;
  return pw && pw.length >= 12 ? pw : null;
}

export const adminConfigured = () => password() !== null;

function sign(expires: string, pw: string) {
  return createHmac("sha256", `webreid-admin:${pw}`).update(expires).digest("hex");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function checkPassword(attempt: string) {
  const pw = password();
  // Compare digests so the comparison is constant-time regardless of input length.
  return pw !== null && safeEqual(sign("pw", attempt), sign("pw", pw));
}

export function createSessionCookie() {
  const pw = password();
  if (!pw) throw new Error("ADMIN_PASSWORD is not set");
  const expires = String(Date.now() + SESSION_HOURS * 3600 * 1000);
  cookies().set(ADMIN_COOKIE, `${expires}.${sign(expires, pw)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: SESSION_HOURS * 3600,
  });
}

export function clearSessionCookie() {
  cookies().delete({ name: ADMIN_COOKIE, path: "/admin" });
}

export function isAdmin() {
  const pw = password();
  const value = cookies().get(ADMIN_COOKIE)?.value;
  if (!pw || !value) return false;
  const [expires, sig] = value.split(".");
  if (!expires || !sig || Number(expires) < Date.now()) return false;
  return safeEqual(sig, sign(expires, pw));
}

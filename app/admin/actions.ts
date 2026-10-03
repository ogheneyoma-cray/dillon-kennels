"use server";

import { redirect } from "next/navigation";
import { checkPassword, clearSessionCookie, createSessionCookie } from "@/lib/admin-auth.server";

export async function login(_prev: { error: string | null }, form: FormData): Promise<{ error: string | null }> {
  const attempt = String(form.get("password") ?? "");
  if (!checkPassword(attempt)) {
    // Slow down guessing.
    await new Promise((r) => setTimeout(r, 1000));
    return { error: "Incorrect password." };
  }
  createSessionCookie();
  redirect("/admin");
}

export async function logout() {
  clearSessionCookie();
  redirect("/admin");
}

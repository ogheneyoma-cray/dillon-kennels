"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export function ClearCartOnMount() {
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return null;
}

export function CheckAgainButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      onClick={() => startTransition(() => router.refresh())}
      disabled={pending}
      className="btn-primary disabled:opacity-60"
    >
      {pending ? "Checking…" : "Check Again"}
    </button>
  );
}

"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-xl bg-lavender p-1 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[32px] rounded-lg px-3.5 transition-all ${
          currency === "USD"
            ? "bg-violet text-white shadow-sm"
            : "text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[32px] rounded-lg px-3.5 transition-all ${
          currency === "NGN"
            ? "bg-violet text-white shadow-sm"
            : "text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

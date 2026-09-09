"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-ink/15 bg-paper p-0.5 text-xs font-semibold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[32px] rounded-md px-3 transition-colors ${
          currency === "NGN"
            ? "bg-berry text-paper"
            : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[32px] rounded-md px-3 transition-colors ${
          currency === "USD"
            ? "bg-berry text-paper"
            : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
    </div>
  );
}

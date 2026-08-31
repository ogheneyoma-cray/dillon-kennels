"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center border border-ink/20 text-xs font-bold uppercase tracking-wide ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[36px] px-3 transition-colors ${
          currency === "NGN"
            ? "bg-ink text-paper"
            : "bg-transparent text-ink/70 hover:text-ink"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] px-3 transition-colors ${
          currency === "USD"
            ? "bg-ink text-paper"
            : "bg-transparent text-ink/70 hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
    </div>
  );
}

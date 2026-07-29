"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center border border-bone/25 text-xs font-semibold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] px-3 transition-colors ${
          currency === "USD"
            ? "bg-acid text-noir"
            : "bg-transparent text-bone/70 hover:text-acid"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[36px] px-3 transition-colors ${
          currency === "NGN"
            ? "bg-acid text-noir"
            : "bg-transparent text-bone/70 hover:text-acid"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

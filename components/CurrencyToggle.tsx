"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-cream/25 text-xs font-bold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("GHS")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "GHS"
            ? "bg-gradient-to-r from-amber to-lime text-ink"
            : "bg-transparent text-cream/70 hover:text-cream"
        }`}
        aria-pressed={currency === "GHS"}
      >
        GHS
      </button>
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "USD"
            ? "bg-gradient-to-r from-amber to-lime text-ink"
            : "bg-transparent text-cream/70 hover:text-cream"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
    </div>
  );
}

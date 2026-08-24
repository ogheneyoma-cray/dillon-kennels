"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink/15 text-xs font-bold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "USD" ? "bg-sky text-white" : "bg-transparent text-ink/60 hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("GHS")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "GHS" ? "bg-sky text-white" : "bg-transparent text-ink/60 hover:text-ink"
        }`}
        aria-pressed={currency === "GHS"}
      >
        GHS
      </button>
    </div>
  );
}

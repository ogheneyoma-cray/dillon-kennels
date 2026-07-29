"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink/20 p-0.5 text-[11px] font-semibold uppercase tracking-widest2 ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[32px] rounded-full px-3 transition-colors ${
          currency === "USD"
            ? "bg-plum text-ivory"
            : "bg-transparent text-ink/70 hover:text-rose"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[32px] rounded-full px-3 transition-colors ${
          currency === "NGN"
            ? "bg-plum text-ivory"
            : "bg-transparent text-ink/70 hover:text-rose"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

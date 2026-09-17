"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center border-2 border-ink text-xs font-bold uppercase ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] px-3 transition-colors ${
          currency === "USD" ? "bg-optic text-ink" : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[36px] border-l-2 border-ink px-3 transition-colors ${
          currency === "NGN" ? "bg-optic text-ink" : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

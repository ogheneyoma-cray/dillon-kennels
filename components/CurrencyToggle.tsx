"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white p-1 text-xs font-bold ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[32px] rounded-full px-3 transition-colors ${
          currency === "USD" ? "bg-volt text-white" : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[32px] rounded-full px-3 transition-colors ${
          currency === "NGN" ? "bg-volt text-white" : "bg-transparent text-ink-soft hover:text-ink"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

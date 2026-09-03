"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center border text-xs font-bold uppercase tracking-wide ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[32px] px-3 transition-colors ${
          currency === "NGN"
            ? "bg-rust text-paper"
            : "bg-transparent opacity-80 hover:opacity-100"
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[32px] px-3 transition-colors ${
          currency === "USD"
            ? "bg-rust text-paper"
            : "bg-transparent opacity-80 hover:opacity-100"
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
    </div>
  );
}

"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyToggle({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { currency, setCurrency } = useCurrency();
  const border = tone === "dark" ? "border-white/20" : "border-ink/15";
  const inactive = tone === "dark" ? "text-white/60 hover:text-white" : "text-ink/60 hover:text-ink";

  return (
    <div
      className={`inline-flex items-center rounded-full border ${border} text-xs font-bold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "USD" ? "bg-teal text-ink" : `bg-transparent ${inactive}`
        }`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[36px] rounded-full px-3 transition-colors ${
          currency === "NGN" ? "bg-teal text-ink" : `bg-transparent ${inactive}`
        }`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
    </div>
  );
}

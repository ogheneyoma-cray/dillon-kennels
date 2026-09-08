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
  const border = tone === "dark" ? "border-cream/30" : "border-ink/20";
  const inactive = tone === "dark" ? "text-cream/70 hover:text-cream" : "text-ink/70 hover:text-ink";
  const active = tone === "dark" ? "bg-teal text-white" : "bg-ink text-cream";

  return (
    <div
      className={`inline-flex items-center border ${border} text-xs font-semibold uppercase tracking-wider ${className}`}
      role="group"
      aria-label="Select currency"
    >
      <button
        type="button"
        onClick={() => setCurrency("NGN")}
        className={`min-h-[36px] px-3 transition-colors ${currency === "NGN" ? active : `bg-transparent ${inactive}`}`}
        aria-pressed={currency === "NGN"}
      >
        NGN
      </button>
      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`min-h-[36px] px-3 transition-colors ${currency === "USD" ? active : `bg-transparent ${inactive}`}`}
        aria-pressed={currency === "USD"}
      >
        USD
      </button>
    </div>
  );
}

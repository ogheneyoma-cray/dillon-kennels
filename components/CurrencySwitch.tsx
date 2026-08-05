"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES } from "@/lib/currency";

/**
 * Two-cell currency toggle. Rendered as a bordered pair rather than a select,
 * so it matches the boxed header cells the reference divides its bar into.
 */
export default function CurrencySwitch({
  className = "",
}: {
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Select currency"
      className={`inline-flex border border-rule ${className}`}
    >
      {CURRENCIES.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setCurrency(option.code)}
          aria-pressed={option.code === currency}
          title={option.label}
          className={`min-h-[34px] px-3 text-[10px] font-medium uppercase tracking-micro transition-colors ${
            option.code === currency
              ? "bg-brass text-ink"
              : "text-smoke hover:text-bone"
          }`}
        >
          {option.symbol} {option.code}
        </button>
      ))}
    </div>
  );
}

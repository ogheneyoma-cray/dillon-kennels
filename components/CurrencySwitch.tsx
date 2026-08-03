"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES } from "@/lib/currency";

/**
 * Currency switcher rendered as two small text buttons separated by the
 * diamond motif used throughout the layout.
 */
export default function CurrencySwitch({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();

  const inactive =
    tone === "light"
      ? "text-paper/50 hover:text-paper"
      : "text-mist hover:text-onyx";

  return (
    <div
      role="group"
      aria-label="Select currency"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {CURRENCIES.map((option, index) => (
        <span key={option.code} className="inline-flex items-center gap-2">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="h-[5px] w-[5px] rotate-45 bg-camel"
            />
          )}
          <button
            type="button"
            onClick={() => setCurrency(option.code)}
            aria-pressed={option.code === currency}
            title={option.label}
            className={`min-h-[32px] text-[11px] font-bold uppercase tracking-wide2 transition-colors ${
              option.code === currency ? "text-camel" : inactive
            }`}
          >
            {option.symbol} {option.code}
          </button>
        </span>
      ))}
    </div>
  );
}

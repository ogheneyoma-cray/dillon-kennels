"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES } from "@/lib/currency";

/**
 * Currency switcher rendered as a two-button segmented control, matching the
 * hard-edged utility controls in the reference layout.
 */
export default function CurrencySwitch({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();

  const shellTone =
    tone === "light" ? "border-canvas/30" : "border-pine/20";

  return (
    <div
      role="group"
      aria-label="Select currency"
      className={`inline-flex overflow-hidden rounded-full border ${shellTone} ${className}`}
    >
      {CURRENCIES.map((option) => {
        const active = option.code === currency;
        const inactive =
          tone === "light"
            ? "text-canvas/60 hover:text-canvas"
            : "text-mudd hover:text-pine";

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setCurrency(option.code)}
            aria-pressed={active}
            title={option.label}
            className={`min-h-[32px] px-3 text-[11px] font-bold uppercase tracking-bold3 transition-colors ${
              active ? "bg-tangerine text-canvas" : inactive
            }`}
          >
            {option.symbol} {option.code}
          </button>
        );
      })}
    </div>
  );
}

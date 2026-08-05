"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES, type CurrencyCode } from "@/lib/currency";

/**
 * Currency selector for the thin top bar. The reference puts a plain dropdown
 * up there beside the language picker, so this is a real <select> rather than
 * a pair of buttons.
 */
export default function CurrencySwitch({
  className = "",
}: {
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <label htmlFor="currency-switch" className="sr-only">
        Select currency
      </label>
      <select
        id="currency-switch"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as CurrencyCode)}
        className="cursor-pointer appearance-none bg-transparent pr-4 font-display text-[11px] font-semibold uppercase tracking-wide2 text-graphite outline-none transition-colors hover:text-rose focus:text-rose"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'><path d='M0 0h8L4 5z' fill='%236A6A6A'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        {CURRENCIES.map((option) => (
          <option key={option.code} value={option.code}>
            {option.symbol} {option.code}
          </option>
        ))}
      </select>
    </span>
  );
}

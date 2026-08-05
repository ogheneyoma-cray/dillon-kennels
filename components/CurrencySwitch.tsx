"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES, type CurrencyCode } from "@/lib/currency";

/**
 * Currency selector for the thin top bar, sitting where the reference puts its
 * language picker. A real <select> rather than a pair of buttons, to match.
 */
export default function CurrencySwitch({
  className = "",
  tone = "paper",
}: {
  className?: string;
  /** "paper" on the dark top bar, "slate" on light surfaces. */
  tone?: "paper" | "slate";
}) {
  const { currency, setCurrency } = useCurrency();
  const text = tone === "paper" ? "text-paper/85" : "text-slate";
  const arrow = tone === "paper" ? "%23ffffff" : "%232E4A5B";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <label htmlFor="currency-switch" className="sr-only">
        Select currency
      </label>
      <select
        id="currency-switch"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as CurrencyCode)}
        className={`cursor-pointer appearance-none bg-transparent pr-4 font-display text-[13px] font-semibold uppercase tracking-wide2 outline-none transition-colors hover:text-clay focus:text-clay ${text}`}
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'><path d='M0 0h8L4 5z' fill='${arrow}'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        {CURRENCIES.map((option) => (
          <option key={option.code} value={option.code} className="text-slate">
            {option.symbol} {option.code}
          </option>
        ))}
      </select>
    </span>
  );
}

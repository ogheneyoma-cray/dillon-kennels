"use client";

import { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import {
  CurrencyCode,
  USD_TO_NGN_RATE,
  convert,
  currencyMeta,
  formatAmount,
} from "@/lib/currency";

/**
 * USD ↔ NGN converter. Type an amount in either direction and the other side
 * updates; the swap control flips which currency is being entered. Setting the
 * store currency from here also re-prices every product on the site.
 */
export default function CurrencyConverter({
  className = "",
}: {
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();
  const [from, setFrom] = useState<CurrencyCode>("USD");
  const [raw, setRaw] = useState("100");

  const to: CurrencyCode = from === "USD" ? "NGN" : "USD";
  const amount = Number.parseFloat(raw);
  const valid = Number.isFinite(amount) && amount >= 0;
  const result = valid ? convert(amount, from, to) : 0;

  const swap = () => {
    // Carry the converted figure across so the swap reads as continuous.
    if (valid) setRaw(String(Number(result.toFixed(to === "NGN" ? 0 : 2))));
    setFrom(to);
  };

  return (
    <div className={`card p-6 ${className}`}>
      <p className="eyebrow">Currency converter</p>
      <p className="mt-3 text-[13px] font-light leading-relaxed text-smoke">
        Every price on this site is held in US dollars and converted at{" "}
        <span className="text-bone">
          $1 = {formatAmount(USD_TO_NGN_RATE, "NGN")}
        </span>
        .
      </p>

      <div className="mt-5 flex items-end gap-3">
        <div className="flex-1">
          <label
            htmlFor="converter-amount"
            className="field-label"
          >
            {currencyMeta(from).label}
          </label>
          <div className="flex items-center border border-rule bg-panel focus-within:border-brass">
            <span className="pl-4 text-sm text-brass">
              {currencyMeta(from).symbol}
            </span>
            <input
              id="converter-amount"
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              value={raw}
              onChange={(event) => setRaw(event.target.value)}
              className="min-h-[48px] w-full bg-transparent px-2 text-sm text-bone focus:outline-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={swap}
          aria-label={`Swap to entering ${currencyMeta(to).label}`}
          className="mb-0 flex h-12 w-12 shrink-0 items-center justify-center border border-rule text-brass transition-colors hover:border-brass hover:bg-brass hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 4v14m0 0-3.5-3.5M7 18l3.5-3.5M17 20V6m0 0-3.5 3.5M17 6l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
            />
          </svg>
        </button>

        <div className="flex-1">
          <p className="field-label">{currencyMeta(to).label}</p>
          <output
            htmlFor="converter-amount"
            className="flex min-h-[48px] items-center border border-rule bg-raised px-4 text-sm text-brass"
          >
            {valid ? formatAmount(result, to) : "—"}
          </output>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-rule pt-4">
        <span className="text-[11px] uppercase tracking-micro text-slate">
          Show prices in
        </span>
        {(["USD", "NGN"] as CurrencyCode[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setCurrency(code)}
            aria-pressed={currency === code}
            className={`text-[11px] font-medium uppercase tracking-micro transition-colors ${
              currency === code
                ? "text-brass underline underline-offset-4"
                : "text-smoke hover:text-bone"
            }`}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}

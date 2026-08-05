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
 * USD ↔ NGN converter. Type an amount on either side and the other updates;
 * the swap control flips the direction. Setting the shop currency from here
 * re-prices every product on the site.
 */
export default function CurrencyConverter({
  className = "",
  tone = "ink",
}: {
  className?: string;
  /** "paper" when the converter sits inside the dark footer. */
  tone?: "ink" | "paper";
}) {
  const { currency, setCurrency } = useCurrency();
  const [from, setFrom] = useState<CurrencyCode>("USD");
  const [raw, setRaw] = useState("100");

  const to: CurrencyCode = from === "USD" ? "NGN" : "USD";
  const amount = Number.parseFloat(raw);
  const valid = Number.isFinite(amount) && amount >= 0;
  const result = valid ? convert(amount, from, to) : 0;

  const dark = tone === "paper";

  const swap = () => {
    // Carry the converted figure across so the swap reads as continuous.
    if (valid) setRaw(String(Number(result.toFixed(to === "NGN" ? 0 : 2))));
    setFrom(to);
  };

  const shellClass = dark
    ? "border border-paper/15 bg-paper/[0.04] p-6"
    : "card p-6 shadow-tile";
  const labelClass = dark ? "text-paper/60" : "text-graphite";
  const inputShell = dark
    ? "border border-paper/20 bg-ink focus-within:border-rose"
    : "border border-line bg-paper focus-within:border-rose";
  const inputText = dark ? "text-paper" : "text-ink";
  const copy = dark ? "text-paper/70" : "text-body";

  return (
    <div className={`${shellClass} ${className}`}>
      <p className="eyebrow">Currency converter</p>
      <p className={`mt-3 text-[13px] leading-relaxed ${copy}`}>
        Every price on this site is held in US dollars and converted at{" "}
        <span className={dark ? "text-paper" : "text-ink"}>
          $1 = {formatAmount(USD_TO_NGN_RATE, "NGN")}
        </span>
        .
      </p>

      <div className="mt-5 flex items-end gap-3">
        <div className="flex-1">
          <label
            htmlFor="converter-amount"
            className={`field-label ${labelClass}`}
          >
            {currencyMeta(from).label}
          </label>
          <div className={`flex items-center rounded-sm ${inputShell}`}>
            <span className="pl-3.5 text-sm font-semibold text-rose">
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
              className={`min-h-[46px] w-full bg-transparent px-2 text-sm focus:outline-none ${inputText}`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={swap}
          aria-label={`Swap to entering ${currencyMeta(to).label}`}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-sm bg-rose text-paper transition-colors hover:bg-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 4v14m0 0-3.5-3.5M7 18l3.5-3.5M17 20V6m0 0-3.5 3.5M17 6l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex-1">
          <p className={`field-label ${labelClass}`}>{currencyMeta(to).label}</p>
          <output
            htmlFor="converter-amount"
            className={`flex min-h-[46px] items-center rounded-sm px-3.5 font-display text-sm font-bold text-rose ${
              dark ? "bg-paper/[0.06]" : "bg-mist"
            }`}
          >
            {valid ? formatAmount(result, to) : "—"}
          </output>
        </div>
      </div>

      <div
        className={`mt-5 flex flex-wrap items-center gap-3 border-t pt-4 ${
          dark ? "border-paper/15" : "border-line"
        }`}
      >
        <span
          className={`font-display text-[11px] font-semibold uppercase tracking-wide2 ${
            dark ? "text-paper/50" : "text-muted"
          }`}
        >
          Show prices in
        </span>
        {(["USD", "NGN"] as CurrencyCode[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setCurrency(code)}
            aria-pressed={currency === code}
            className={`font-display text-[11px] font-bold uppercase tracking-wide2 transition-colors ${
              currency === code
                ? "text-rose underline underline-offset-4"
                : dark
                  ? "text-paper/70 hover:text-paper"
                  : "text-body hover:text-ink"
            }`}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}

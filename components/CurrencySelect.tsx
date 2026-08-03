"use client";

import { useEffect, useRef, useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES, CurrencyCode } from "@/lib/currency";

/**
 * Currency switcher styled as the small dropdown that sits in the utility bar
 * and the footer bottom rail. Closes on outside click and on Escape.
 */
export default function CurrencySelect({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const trigger =
    tone === "dark"
      ? "text-linen/80 hover:text-linen"
      : "text-midnight/70 hover:text-midnight";

  const choose = (code: CurrencyCode) => {
    setCurrency(code);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Currency: ${currency}. Change currency`}
        className={`flex min-h-[36px] items-center gap-1.5 text-xs font-medium tracking-wide transition-colors ${trigger}`}
      >
        {currency}
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select currency"
          className="absolute right-0 z-50 mt-2 min-w-[172px] overflow-hidden rounded-xl border border-midnight/10 bg-linen py-1 shadow-xl shadow-midnight/10"
        >
          {CURRENCIES.map((option) => (
            <li key={option.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={currency === option.code}
                onClick={() => choose(option.code)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-xs transition-colors hover:bg-mist/60 ${
                  currency === option.code
                    ? "font-semibold text-orchid-dark"
                    : "text-midnight/75"
                }`}
              >
                <span>
                  {option.symbol} {option.label}
                </span>
                <span className="font-medium tracking-wide">{option.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

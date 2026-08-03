"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

/**
 * Renders a price in the active currency. When `compareAtUsd` is supplied the
 * original price is shown struck through before the reduced one, matching the
 * reference product cards.
 */
export default function ProductPrice({
  priceUsd,
  compareAtUsd,
  className = "",
  compareClassName = "",
}: {
  priceUsd: number;
  compareAtUsd?: number;
  className?: string;
  compareClassName?: string;
}) {
  const { currency } = useCurrency();

  if (compareAtUsd === undefined) {
    return <span className={className}>{formatMoney(priceUsd, currency)}</span>;
  }

  return (
    <span className="inline-flex flex-wrap items-baseline gap-2">
      <span className={`text-mudd/60 line-through ${compareClassName}`}>
        {formatMoney(compareAtUsd, currency)}
      </span>
      <span className={className}>{formatMoney(priceUsd, currency)}</span>
    </span>
  );
}

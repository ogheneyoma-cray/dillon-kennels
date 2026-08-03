"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

/**
 * Price in the active currency. When `compareAtUsd` is supplied the original
 * is struck through before the reduced one, as on the reference cards.
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
      <span className={`text-mist line-through ${compareClassName}`}>
        {formatMoney(compareAtUsd, currency)}
      </span>
      <span className={className}>{formatMoney(priceUsd, currency)}</span>
    </span>
  );
}

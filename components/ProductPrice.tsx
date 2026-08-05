"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

/**
 * Price in the shopper's chosen currency, with the struck-through original
 * beside it when the title is reduced.
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

  return (
    <span className="inline-flex flex-wrap items-baseline gap-2">
      <span className={`font-display font-bold text-clay ${className}`}>
        {formatMoney(priceUsd, currency)}
      </span>
      {compareAtUsd !== undefined && (
        <span className={`text-muted line-through ${compareClassName}`}>
          {formatMoney(compareAtUsd, currency)}
        </span>
      )}
    </span>
  );
}

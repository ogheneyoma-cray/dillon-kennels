"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/format";

export default function ProductPrice({
  priceUsd,
  className = "",
}: {
  priceUsd: number;
  className?: string;
}) {
  const { currency } = useCurrency();
  return <span className={className}>{formatPrice(priceUsd, currency)}</span>;
}

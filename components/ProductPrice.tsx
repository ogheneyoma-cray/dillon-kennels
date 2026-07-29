"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

export default function ProductPrice({
  priceUsd,
  className = "",
}: {
  priceUsd: number;
  className?: string;
}) {
  const { currency } = useCurrency();
  return <span className={className}>{formatMoney(priceUsd, currency)}</span>;
}

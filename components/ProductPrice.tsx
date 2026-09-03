"use client";

import { Product } from "@/data/products";
import { useCurrency } from "@/context/CurrencyContext";
import { formatProductMoney } from "@/lib/currency";

export default function ProductPrice({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { currency } = useCurrency();
  return <span className={className}>{formatProductMoney(product, currency)}</span>;
}

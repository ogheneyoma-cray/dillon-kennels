"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import { getSaleProducts } from "@/data/products";
import ProductImage from "@/components/ProductImage";
import StarRating from "@/components/StarRating";

/**
 * Bordered discount cards with a circular percent-off badge, matching the
 * reference's "Special Offer" band.
 */
export default function SpecialOfferGrid() {
  const items = getSaleProducts();
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((product) => (
        <div key={product.id} className="relative flex flex-col border border-ink/15 p-6">
          <span className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-center text-xs font-bold uppercase text-white">
            Sale
          </span>
          <Link href={`/shop/${product.slug}`} className="relative mx-auto block aspect-square w-full max-w-[220px] overflow-hidden rounded-lg bg-sand">
            <ProductImage src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-dark">{product.category}</p>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink hover:text-teal-dark">{product.name}</h3>
          </Link>
          <StarRating rating={product.rating} className="mt-2" />
          <p className="mt-2 text-lg font-bold text-ink">{formatMoney(product.price, currency)}</p>
          <button type="button" onClick={() => addToCart(product, 1)} className="btn-primary mt-4 w-full">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import StarRating from "@/components/StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-tile transition-shadow hover:shadow-lift">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-lavender"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo">
            Popular
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-ink-soft backdrop-blur-sm">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-violet">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} className="mt-2" />
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-lg font-bold text-violet">
            {formatMoney(product.price, currency)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[36px] items-center justify-center rounded-lg bg-indigo px-4 font-display text-xs font-semibold text-white transition-colors hover:bg-violet"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

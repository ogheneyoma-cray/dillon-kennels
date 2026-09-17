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
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/70 backdrop-blur-sm transition-all hover:border-violet/30 hover:shadow-glow sm:flex-row">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/3] w-full shrink-0 overflow-hidden bg-indigo/5 sm:aspect-square sm:w-48"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 640px) 192px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo">
            Popular
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="inline-block rounded-full bg-violet-pale px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet">
            {product.category}
          </span>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-violet">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {product.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <StarRating rating={product.rating} />
            <span className="mt-1 block font-display text-lg font-bold text-violet">
              {formatMoney(product.price, currency)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[40px] items-center justify-center rounded-xl bg-indigo px-5 font-display text-xs font-semibold text-white transition-colors hover:bg-violet"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

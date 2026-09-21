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
    <div className="group flex flex-col border border-line bg-white transition-shadow hover:shadow-lift">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-stone">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover grayscale-[15%] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-0 top-3 bg-signal px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-paper">
            Popular
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">{product.category}</p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 font-display text-lg italic leading-snug text-ink transition-colors group-hover:text-signal">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="font-display text-base text-ink">{formatMoney(product.price, currency)}</span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[34px] items-center justify-center border border-ink px-4 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:border-signal hover:bg-signal hover:text-paper"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

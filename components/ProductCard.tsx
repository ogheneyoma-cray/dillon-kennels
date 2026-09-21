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
    <div className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-shadow hover:shadow-lift">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-volt-pale">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Popular
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-volt-dark">{product.category}</p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink transition-colors group-hover:text-volt-dark">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="font-display text-base font-bold text-ink">{formatMoney(product.price, currency)}</span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-ink px-4 font-display text-xs font-bold text-white transition-colors hover:bg-volt"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

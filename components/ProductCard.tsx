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
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-0.5 hover:shadow-lift">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-cobalt-pale"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-flare px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Most Booked
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="inline-block w-fit rounded-full bg-cobalt-pale px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cobalt">
          {product.category}
        </span>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-cobalt">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <StarRating rating={product.rating} />
            <span className="mt-1 block font-display text-lg font-bold text-ink">
              {formatMoney(product.price, currency)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-ink px-5 font-display text-xs font-bold text-white transition-colors hover:bg-cobalt"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

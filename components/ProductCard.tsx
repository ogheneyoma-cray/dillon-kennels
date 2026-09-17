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
    <div className="group relative flex flex-col border-2 border-ink bg-white transition-transform hover:-translate-y-1">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden border-b-2 border-ink bg-optic-pale"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-0 top-3 border-y-2 border-r-2 border-ink bg-optic px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink">
            Popular
          </span>
        )}
      </Link>

      {/* ticket-stub perforation */}
      <div className="relative">
        <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full border-2 border-ink bg-cream" />
        <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-ink bg-cream" />
        <div className="mx-4 border-t-2 border-dashed border-ink" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-block w-fit border border-ink px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
          {product.category}
        </span>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <StarRating rating={product.rating} />
            <span className="mt-1 block font-display text-lg font-extrabold text-ink">
              {formatMoney(product.price, currency)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[40px] items-center justify-center border-2 border-ink bg-ink px-5 font-display text-xs font-extrabold uppercase text-optic transition-colors hover:bg-optic hover:text-ink"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

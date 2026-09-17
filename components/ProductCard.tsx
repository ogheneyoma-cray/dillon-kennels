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
    <div className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-lift">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-clay-pale">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>

      {/* swing-tag price label overlapping the image/body seam */}
      <div className="relative px-4">
        <div className="absolute -top-4 right-4 flex h-8 items-center gap-1 rounded-sm bg-ink px-3 shadow-tile">
          <span className="h-1.5 w-1.5 rounded-full bg-linen/70" />
          <span className="font-display text-xs font-bold text-linen">{formatMoney(product.price, currency)}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-3">
        {product.popular && (
          <span className="mb-1.5 inline-block w-fit rounded-sm bg-clay-pale px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-clay-dark">
            Bestseller
          </span>
        )}
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-sm font-bold leading-snug text-ink transition-colors group-hover:text-clay-dark">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-soft">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <StarRating rating={product.rating} />
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[36px] items-center justify-center rounded-md bg-ink px-4 font-display text-xs font-bold text-linen transition-colors hover:bg-clay-dark"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

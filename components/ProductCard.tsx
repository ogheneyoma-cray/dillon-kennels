"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import StarRating from "@/components/StarRating";

export default function ProductCard({
  product,
  tall = false,
}: {
  product: Product;
  tall?: boolean;
}) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className={`relative block w-full overflow-hidden rounded-sm bg-aubergine-pale ${
          tall ? "aspect-[3/4.4]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-oat/90 px-3 py-1 font-display text-[11px] italic text-aubergine">
            Editor&apos;s Pick
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
          className="absolute inset-x-3 bottom-3 min-h-[38px] rounded-full bg-oat/95 font-body text-xs font-semibold uppercase tracking-wide text-aubergine opacity-0 shadow-tile transition-opacity duration-200 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </Link>
      <div className="mt-3">
        <div className="flex items-baseline justify-between gap-2">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-display text-base italic text-ink transition-colors group-hover:text-aubergine">
              {product.name}
            </h3>
          </Link>
          <span className="whitespace-nowrap font-body text-sm font-semibold text-aubergine">
            {formatMoney(product.price, currency)}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-[11px] uppercase tracking-wider text-ink-soft">{product.category}</span>
        </div>
      </div>
    </div>
  );
}

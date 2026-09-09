"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import ProductCover from "@/components/ProductCover";
import StarRating from "@/components/StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-tile">
      <Link
        href={`/shop/${product.slug}`}
        className="relative m-3 block aspect-[16/10] overflow-hidden rounded-xl bg-silver-pale"
      >
        <ProductCover
          src={product.image}
          alt={`${product.name} preview`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && <span className="badge-ribbon">Bestseller</span>}
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-ink-soft">({product.rating}.0)</span>
        </div>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-fuchsia">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
          {product.instructor}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-fuchsia">
            {formatMoney(product.price, currency)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-steel text-paper transition-colors hover:bg-fuchsia"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 4v12M4 10h12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

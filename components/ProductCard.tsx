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
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-line shadow-tile">
      <div className="window-chrome">
        <span className="window-dot bg-[#FF5F57]" />
        <span className="window-dot bg-[#FEBC2E]" />
        <span className="window-dot bg-[#28C840]" />
        <span className="ml-2 truncate font-display text-[11px] text-ink-soft">
          {product.slug}.tsx
        </span>
      </div>
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-x border-line bg-mist"
      >
        <ProductCover
          src={product.image}
          alt={`${product.name} preview`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && <span className="badge-ribbon">Top Seller</span>}
      </Link>
      <div className="flex flex-1 flex-col rounded-b-xl border border-t-0 border-line bg-paper p-5">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-ink-soft">({product.rating}.0)</span>
        </div>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-term-dark">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
          {product.instructor}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-ink">
            {formatMoney(product.price, currency)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[38px] items-center justify-center rounded-md bg-void px-4 font-display text-xs font-semibold text-term transition-colors hover:bg-void-soft"
          >
            add_to_cart()
          </button>
        </div>
      </div>
    </div>
  );
}

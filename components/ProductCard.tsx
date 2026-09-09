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
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-tile">
      <div className="relative block aspect-[4/3] overflow-hidden bg-sand">
        <ProductCover
          src={product.image}
          alt={`${product.name} preview`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
        {product.popular && <span className="badge-ribbon">Bestseller</span>}
        <div className="preview-overlay">
          <Link
            href={`/shop/${product.slug}`}
            className="inline-flex min-h-[38px] items-center justify-center rounded-lg bg-paper px-4 text-xs font-bold text-ink transition-colors hover:bg-peach"
          >
            Live Preview
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[38px] items-center justify-center rounded-lg bg-berry px-4 text-xs font-bold text-paper transition-colors hover:bg-berry-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-ink-soft">({product.rating}.0)</span>
        </div>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors hover:text-berry">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
          {product.instructor}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-berry">
            {formatMoney(product.price, currency)}
          </span>
          <Link
            href={`/shop/${product.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-ink-soft hover:text-berry"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

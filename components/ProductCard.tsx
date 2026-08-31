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
    <div className="group relative flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-indigo-pale shadow-tile"
      >
        <ProductCover
          src={product.image}
          alt={`${product.name} cover`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && <span className="badge-ribbon">Bestseller</span>}
        {!product.inStock && (
          <span className="absolute right-0 top-3 rounded-l-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-paper">
            Sold Out
          </span>
        )}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-indigo">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
          {product.instructor}
        </p>
        <StarRating rating={product.rating} className="mt-2" />
        <p className="mt-2 text-sm font-bold text-indigo">
          {formatMoney(product.price, currency)}
        </p>
        <button
          type="button"
          onClick={() => addToCart(product, 1)}
          disabled={!product.inStock}
          className="btn-secondary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}

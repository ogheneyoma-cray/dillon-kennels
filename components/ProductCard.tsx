"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import BookCover from "@/components/BookCover";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Book card: the jacket stands on a sand panel with a soft drop shadow, a sale
 * flag at the top left, and a clay add bar that rises over the foot of the
 * jacket on hover — the treatment the reference uses across its product rows.
 */
export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!product.inStock) return;
    addToCart(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const off = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-shadow duration-300 hover:shadow-lift">
      <div className="relative overflow-hidden bg-sand px-7 pb-7 pt-8">
        <Link
          href={`/shop/${product.slug}`}
          className="block"
          aria-label={product.name}
        >
          <BookCover
            src={product.image}
            alt={`${product.name} by ${product.author}`}
            className="w-full rounded-r-md shadow-jacket transition-transform duration-500 ease-out group-hover:-translate-y-2"
          />
        </Link>

        <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1.5">
          {off !== null && (
            <span className="chip bg-clay text-paper">−{off}%</span>
          )}
          {product.bestSeller && off === null && (
            <span className="chip bg-slate text-paper">Bestseller</span>
          )}
          {!product.inStock && (
            <span className="chip bg-muted text-paper">Unavailable</span>
          )}
        </div>

        {/* Hover add bar */}
        {/* Rests fully outside the panel — anchored to the panel edge so a
            plain translate-y-full clears it whatever the bar's height. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full px-7 pb-7 transition-transform duration-300 group-hover:translate-y-0 md:block">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="pointer-events-auto w-full rounded-pill bg-clay py-3 font-display text-[13px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-slate disabled:cursor-not-allowed disabled:bg-muted"
          >
            {!product.inStock
              ? "Unavailable"
              : added
                ? "Added"
                : "Add to basket"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5 text-center">
        <p className="font-display text-[12px] font-semibold uppercase tracking-wide2 text-clay">
          {product.category}
        </p>
        <h3 className="mt-2">
          <Link
            href={`/shop/${product.slug}`}
            className="font-display text-[17px] font-bold leading-snug text-slate transition-colors hover:text-clay"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-[13px] text-muted">by {product.author}</p>

        <StarRating rating={product.rating} className="mt-3 justify-center" />

        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-3 text-lg"
          compareClassName="text-[14px]"
        />

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="mt-4 w-full rounded-pill border-2 border-slate py-2.5 font-display text-[13px] font-bold uppercase tracking-wide2 text-slate transition-colors hover:border-clay hover:bg-clay hover:text-paper disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          {!product.inStock ? "Unavailable" : added ? "Added" : "Add to basket"}
        </button>
      </div>
    </article>
  );
}

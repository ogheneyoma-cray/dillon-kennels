"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Product tile: the image sits on a raised near-black panel with the add bar
 * sliding up over it, then name, cloth and price run left-aligned underneath —
 * the card treatment used across the reference grid.
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
    <article className="group flex flex-col">
      <div className="relative overflow-hidden border border-rule bg-panel transition-colors duration-300 group-hover:border-brass/50">
        <Link
          href={`/shop/${product.slug}`}
          className="relative block aspect-[3/4]"
          aria-label={product.name}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          />
        </Link>

        <div className="pointer-events-none absolute left-0 top-0 flex flex-col">
          {off !== null && (
            <span className="bg-brass px-3 py-1.5 text-[10px] font-medium uppercase tracking-micro text-ink">
              −{off}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-bone px-3 py-1.5 text-[10px] font-medium uppercase tracking-micro text-ink">
              Between runs
            </span>
          )}
        </div>

        {/* Hover add bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full transition-transform duration-300 group-hover:translate-y-0 md:block">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="pointer-events-auto w-full bg-brass py-4 text-[11px] font-medium uppercase tracking-micro text-ink transition-colors hover:bg-brass-glow disabled:cursor-not-allowed disabled:bg-rule disabled:text-slate"
          >
            {!product.inStock
              ? "Between runs"
              : added
                ? "Added to bag"
                : "Add to bag"}
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[10px] uppercase tracking-micro text-slate">
          {product.category}
        </p>
        <h3 className="mt-2">
          <Link
            href={`/shop/${product.slug}`}
            className="text-[15px] font-light leading-snug text-bone transition-colors hover:text-brass"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-3 flex items-center justify-between gap-3">
          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="text-[15px] text-brass"
            compareClassName="text-[13px]"
          />
          <StarRating rating={product.rating} />
        </div>

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="mt-4 w-full border border-rule py-3 text-[11px] font-medium uppercase tracking-micro text-bone transition-colors hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          {!product.inStock ? "Between runs" : added ? "Added" : "Add to bag"}
        </button>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/ProductPrice";

function discountPercent(product: Product): number | null {
  if (!product.compareAt) return null;
  return Math.round(
    ((product.compareAt - product.price) / product.compareAt) * 100
  );
}

/**
 * Product tile modelled on the reference grid: image with a hover-revealed
 * quick-add bar and size rail, badges pinned to the corners, and the name and
 * price stacked underneath. The quick-add is duplicated as an always-visible
 * button below on touch screens, where there is no hover state to rely on.
 */
export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const off = discountPercent(product);

  const add = () => {
    if (!product.inStock) return;
    addToCart(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-mist">
        <Link
          href={`/shop/${product.slug}`}
          className="relative block aspect-[4/5]"
          aria-label={product.name}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 768px) 31vw, 46vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {off !== null && (
            <span className="rounded-full bg-orchid px-2.5 py-1 text-[10px] font-semibold tracking-wide text-linen">
              −{off}%
            </span>
          )}
          {product.newArrival && off === null && (
            <span className="rounded-full bg-midnight px-2.5 py-1 text-[10px] font-semibold tracking-wide text-linen">
              New
            </span>
          )}
          {!product.inStock && (
            <span className="rounded-full bg-linen px-2.5 py-1 text-[10px] font-semibold tracking-wide text-midnight">
              Sold out
            </span>
          )}
        </div>

        {/* Hover layer: quick add + size rail, mirroring the reference cards. */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="pointer-events-auto w-full rounded-full bg-linen/95 py-3 text-[11px] font-semibold uppercase tracking-wide3 text-midnight backdrop-blur transition-colors hover:bg-midnight hover:text-linen disabled:cursor-not-allowed disabled:opacity-50"
          >
            {!product.inStock
              ? "Sold out"
              : added
                ? "Added to bag"
                : "Quick add"}
          </button>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full bg-midnight/70 px-2 py-1 text-[10px] font-medium text-linen backdrop-blur"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[11px] uppercase tracking-wide3 text-slate">
          {product.category}
        </p>
        <h3 className="mt-1.5">
          <Link
            href={`/shop/${product.slug}`}
            className="font-body text-[15px] font-medium leading-snug text-midnight transition-colors hover:text-orchid"
          >
            {product.name}
          </Link>
        </h3>
        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-1.5 text-[15px] font-semibold text-midnight"
          compareClassName="text-[13px]"
        />

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="mt-3 rounded-full border border-midnight/20 py-2.5 text-[11px] font-semibold uppercase tracking-wide3 text-midnight transition-colors hover:border-midnight hover:bg-midnight hover:text-linen disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          {!product.inStock ? "Sold out" : added ? "Added" : "Add to bag"}
        </button>
      </div>
    </article>
  );
}

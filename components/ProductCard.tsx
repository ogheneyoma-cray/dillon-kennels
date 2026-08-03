"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Product tile: image on a soft grey field, a hover-revealed add bar, then
 * centred name, price and star row — the arrangement used by the reference
 * grid. The add button is duplicated below on touch screens.
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
      <div className="relative overflow-hidden bg-haze">
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
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {off !== null && (
            <span className="bg-camel px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide2 text-paper">
              −{off}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-onyx px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide2 text-paper">
              Sold out
            </span>
          )}
        </div>

        {/* Hover add bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full transition-transform duration-300 group-hover:translate-y-0 md:block">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="pointer-events-auto w-full bg-onyx py-3.5 text-[11px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-camel disabled:cursor-not-allowed disabled:bg-mist"
          >
            {!product.inStock
              ? "Sold out"
              : added
                ? "Added to bag"
                : "Add to bag"}
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col items-center text-center">
        <h3>
          <Link
            href={`/shop/${product.slug}`}
            className="text-[13px] font-semibold uppercase tracking-wide2 text-onyx transition-colors hover:text-camel"
          >
            {product.name}
          </Link>
        </h3>
        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-2 text-[15px] font-semibold text-camel"
          compareClassName="text-[13px]"
        />
        <StarRating rating={product.rating} className="mt-2" />

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="mt-3 w-full border border-onyx py-2.5 text-[11px] font-bold uppercase tracking-wide2 text-onyx transition-colors hover:bg-onyx hover:text-paper disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          {!product.inStock ? "Sold out" : added ? "Added" : "Add to bag"}
        </button>
      </div>
    </article>
  );
}

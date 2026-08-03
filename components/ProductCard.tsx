"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/ProductPrice";

/** Diagonal corner flag, as used on the reference product tiles. */
function CornerRibbon({
  label,
  tone,
}: {
  label: string;
  tone: "sale" | "new" | "out";
}) {
  const fill =
    tone === "sale" ? "bg-tangerine" : tone === "new" ? "bg-lagoon" : "bg-mudd";

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 h-[76px] w-[76px] overflow-hidden"
    >
      <span
        className={`absolute -right-[34px] top-[16px] w-[120px] rotate-45 py-1 text-center text-[10px] font-bold uppercase tracking-bold3 text-canvas ${fill}`}
      >
        {label}
      </span>
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!product.inStock) return;
    addToCart(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const ribbon = !product.inStock
    ? { label: "Sold", tone: "out" as const }
    : product.compareAt
      ? { label: "Sale", tone: "sale" as const }
      : product.newArrival
        ? { label: "New", tone: "new" as const }
        : null;

  return (
    <article className="group relative flex flex-col border border-pine/10 bg-white pb-9 transition-shadow duration-300 hover:shadow-panel">
      <div className="relative overflow-hidden">
        <Link
          href={`/shop/${product.slug}`}
          className="relative block aspect-[3/4] bg-shell"
          aria-label={product.name}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
        {ribbon && <CornerRibbon label={ribbon.label} tone={ribbon.tone} />}
      </div>

      <div className="px-4 pt-5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-bold3 text-lagoon">
          {product.category}
        </p>
        <h3 className="mt-2">
          <Link
            href={`/shop/${product.slug}`}
            className="font-display text-[15px] font-bold uppercase leading-snug tracking-wide text-pine transition-colors hover:text-tangerine"
          >
            {product.name}
          </Link>
        </h3>
        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-2 inline-block text-base font-extrabold text-pine"
          compareClassName="text-sm"
        />
      </div>

      {/* Circular action button straddling the card's bottom edge. */}
      <button
        type="button"
        onClick={add}
        disabled={!product.inStock}
        aria-label={
          product.inStock ? `Add ${product.name} to basket` : "Sold out"
        }
        className="absolute -bottom-[22px] left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-pine text-canvas shadow-panel transition-colors hover:bg-tangerine disabled:cursor-not-allowed disabled:bg-mudd/40"
      >
        {added ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 4h2.2l2 11.2a1.6 1.6 0 0 0 1.6 1.3h8.5a1.6 1.6 0 0 0 1.6-1.2L21 8H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.4" fill="currentColor" />
            <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
          </svg>
        )}
      </button>
    </article>
  );
}

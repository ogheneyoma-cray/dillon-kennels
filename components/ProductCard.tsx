"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Product tile: a bordered white card, corner flags at the top left, a rose
 * add-to-bag bar that slides up over the image on hover, then a centred name,
 * star row and price beneath — the card treatment used across the reference
 * grids.
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
    <article className="group flex flex-col border border-line bg-paper transition-shadow duration-300 hover:shadow-lift">
      <div className="relative overflow-hidden bg-mist">
        <Link
          href={`/shop/${product.slug}`}
          className="relative block aspect-square"
          aria-label={product.name}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {off !== null && (
            <span className="chip bg-rose text-paper">−{off}%</span>
          )}
          {product.bestSeller && off === null && (
            <span className="chip bg-ink text-paper">New</span>
          )}
          {!product.inStock && (
            <span className="chip bg-graphite text-paper">Sold out</span>
          )}
        </div>

        {/* Hover add bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full transition-transform duration-300 group-hover:translate-y-0 md:block">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="pointer-events-auto w-full bg-rose py-3.5 font-display text-[11px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-line-firm disabled:text-graphite"
          >
            {!product.inStock
              ? "Sold out"
              : added
                ? "Added to bag"
                : "Add to bag"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-5 text-center">
        <p className="font-display text-[10px] font-semibold uppercase tracking-wide2 text-muted">
          {product.category}
        </p>
        <h3 className="mt-2">
          <Link
            href={`/shop/${product.slug}`}
            className="font-display text-[13px] font-semibold uppercase tracking-wide2 text-ink transition-colors hover:text-rose"
          >
            {product.name}
          </Link>
        </h3>

        <StarRating rating={product.rating} className="mt-2.5" />

        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-3 text-base"
          compareClassName="text-[13px]"
        />

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="mt-4 w-full border border-line-firm py-2.5 font-display text-[11px] font-bold uppercase tracking-wide2 text-ink transition-colors hover:border-rose hover:bg-rose hover:text-paper disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          {!product.inStock ? "Sold out" : added ? "Added" : "Add to bag"}
        </button>
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { site } from "@/lib/site";

export default function ProductDetailActions({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const add = () => {
    addToCart(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div className="mt-8">
      <fieldset>
        <legend className="field-label">
          Size <span className="text-midnight">· {size}</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={option === size}
              className={`min-h-[44px] min-w-[52px] rounded-full border px-4 text-[13px] transition-colors ${
                option === size
                  ? "border-midnight bg-midnight text-linen"
                  : "border-midnight/20 text-midnight hover:border-midnight"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-midnight/20">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="flex h-12 w-12 items-center justify-center text-lg text-midnight transition-colors hover:text-orchid"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-medium" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(10, value + 1))}
            className="flex h-12 w-12 items-center justify-center text-lg text-midnight transition-colors hover:text-orchid"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="pill-dark min-w-[220px] flex-1 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to bag" : "Sold out"}
        </button>
      </div>

      {added && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-orchid/10 px-4 py-3 text-sm text-orchid-dark"
        >
          Added {quantity} × {product.name} ({size}) to your bag.
          <Link
            href="/cart"
            className="font-semibold underline underline-offset-4"
          >
            View bag
          </Link>
        </p>
      )}

      {!product.inStock && (
        <p className="mt-4 text-sm text-slate">
          This piece is between dye lots. Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-orchid underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          and we will tell you the week it returns.
        </p>
      )}
    </div>
  );
}

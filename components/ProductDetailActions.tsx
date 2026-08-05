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
    <div className="mt-10">
      <fieldset>
        <legend className="field-label">
          Size <span className="text-brass">· {size}</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={option === size}
              className={`min-h-[46px] min-w-[64px] border px-3 text-[12px] font-medium uppercase tracking-micro transition-colors ${
                option === size
                  ? "border-brass bg-brass text-ink"
                  : "border-rule text-smoke hover:border-brass hover:text-bone"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="flex items-center border border-rule">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            aria-label="Decrease quantity"
            className="flex h-[52px] w-12 items-center justify-center text-lg text-bone transition-colors hover:text-brass"
          >
            −
          </button>
          <span className="w-9 text-center text-sm text-bone" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(10, value + 1))}
            aria-label="Increase quantity"
            className="flex h-[52px] w-12 items-center justify-center text-lg text-bone transition-colors hover:text-brass"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="btn-brass min-w-[220px] flex-1 disabled:cursor-not-allowed disabled:bg-rule disabled:text-slate"
        >
          {product.inStock ? "Add to bag" : "Between runs"}
        </button>
      </div>

      {added && (
        <p
          role="status"
          aria-live="polite"
          className="mt-5 flex flex-wrap items-center gap-2 border-l border-brass bg-panel px-5 py-4 text-sm font-light text-bone"
        >
          Added {quantity} × {product.name} ({size}) to your bag.
          <Link href="/cart" className="text-brass underline underline-offset-4">
            View bag
          </Link>
        </p>
      )}

      {!product.inStock && (
        <p className="mt-5 text-sm font-light leading-relaxed text-smoke">
          This cloth is being rewoven. Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-brass underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          and we will tell you the week it comes back.
        </p>
      )}
    </div>
  );
}

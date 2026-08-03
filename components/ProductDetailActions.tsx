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
          Size <span className="text-pine">· {size}</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={option === size}
              className={`min-h-[44px] min-w-[62px] border-2 px-3 text-[12px] font-bold uppercase tracking-wide transition-colors ${
                option === size
                  ? "border-pine bg-pine text-canvas"
                  : "border-pine/15 text-pine hover:border-pine"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="flex items-center border-2 border-pine/15">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-lg text-pine transition-colors hover:bg-shell"
          >
            −
          </button>
          <span className="w-9 text-center text-sm font-bold" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(10, value + 1))}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-lg text-pine transition-colors hover:bg-shell"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="btn-solid min-w-[220px] flex-1 disabled:cursor-not-allowed disabled:bg-mudd/40"
        >
          {product.inStock ? "Add to basket" : "Sold out"}
        </button>
      </div>

      {added && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 flex flex-wrap items-center gap-2 border-l-4 border-lagoon bg-lagoon/10 px-4 py-3 text-sm text-forest"
        >
          Added {quantity} × {product.name} ({size}) to your basket.
          <Link href="/cart" className="font-bold underline underline-offset-4">
            View basket
          </Link>
        </p>
      )}

      {!product.inStock && (
        <p className="mt-4 text-sm text-mudd">
          This one is between runs. Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-bold text-tangerine underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          and we will tell you the week it returns.
        </p>
      )}
    </div>
  );
}

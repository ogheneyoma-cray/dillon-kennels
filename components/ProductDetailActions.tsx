"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

/**
 * Format picker and add-to-basket control for the book page. There is no
 * quantity stepper — a licence for a download is bought once, so the reference
 * pattern of a counter would be wrong here.
 */
export default function ProductDetailActions({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [format, setFormat] = useState(product.formats[0]);
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!product.inStock) return;
    addToCart(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div>
        <p className="field-label">Download format</p>
        <div className="flex flex-wrap gap-2">
          {product.formats.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFormat(option)}
              aria-pressed={format === option}
              className={`min-h-[44px] rounded-pill border-2 px-5 font-display text-[13px] font-bold uppercase tracking-wide2 transition-colors ${
                format === option
                  ? "border-clay bg-clay text-paper"
                  : "border-line text-slate hover:border-clay hover:text-clay"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-2.5 text-[13px] text-muted">
          All {product.formats.length} formats are included with every purchase
          — the choice above is just what we open first.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="btn-clay flex-1 disabled:cursor-not-allowed disabled:bg-muted"
        >
          {!product.inStock
            ? "Unavailable"
            : added
              ? "Added to basket"
              : "Add to basket"}
        </button>
      </div>

      {added && (
        <p role="status" className="mt-3 text-sm text-body">
          {product.name} added to your basket, {format} first.
        </p>
      )}
    </div>
  );
}

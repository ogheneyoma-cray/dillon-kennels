"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

/**
 * Size picker, quantity stepper and add-to-bag control for the product page.
 */
export default function ProductDetailActions({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [size, setSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const add = () => {
    if (!product.inStock) return;
    addToCart(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div>
        <p className="field-label">
          Size <span className="text-rose">· EU</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              className={`min-h-[42px] min-w-[52px] border px-3 font-display text-[12px] font-semibold transition-colors ${
                size === option
                  ? "border-rose bg-rose text-paper"
                  : "border-line text-ink hover:border-rose hover:text-rose"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="flex items-center border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-[48px] w-11 items-center justify-center text-ink transition-colors hover:text-rose"
          >
            −
          </button>
          <span
            aria-live="polite"
            className="w-10 text-center font-display text-sm font-semibold text-ink"
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(9, q + 1))}
            aria-label="Increase quantity"
            className="flex h-[48px] w-11 items-center justify-center text-ink transition-colors hover:text-rose"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="btn-rose flex-1 disabled:cursor-not-allowed disabled:bg-line-firm disabled:text-graphite"
        >
          {!product.inStock
            ? "Sold out"
            : added
              ? `Added — size ${size}`
              : "Add to bag"}
        </button>
      </div>

      {added && (
        <p role="status" className="mt-3 text-sm text-body">
          {quantity} × {product.name} in size {size} added to your bag.
        </p>
      )}
    </div>
  );
}

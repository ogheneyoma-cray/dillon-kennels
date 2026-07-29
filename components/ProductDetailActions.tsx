"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(99, q + 1));

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="label-text mb-0">Quantity</span>
        <div className="flex items-center border border-ink/20">
          <button
            type="button"
            onClick={decrease}
            aria-label="Decrease quantity"
            className="flex h-11 w-11 items-center justify-center text-lg text-ink transition-colors hover:bg-sand disabled:opacity-30"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="flex h-11 w-12 items-center justify-center border-x border-ink/20 text-sm font-semibold">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increase}
            aria-label="Increase quantity"
            className="flex h-11 w-11 items-center justify-center text-lg text-ink transition-colors hover:bg-sand"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!product.inStock}
          className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? (added ? "Added ✓" : "Add to Cart") : "Sold Out"}
        </button>
        <button
          type="button"
          onClick={() => {
            addToCart(product, quantity);
            router.push("/cart");
          }}
          disabled={!product.inStock}
          className="btn-secondary flex-1 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

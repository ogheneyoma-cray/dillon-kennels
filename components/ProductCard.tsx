"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import ProductImage from "@/components/ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-tile transition-transform duration-300 ease-out group-hover:-translate-y-1"
      >
        <ProductImage product={product} />
        {product.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-ink">
            Popular
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-white">
            Unavailable
          </span>
        )}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-dark">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-ink/50">{product.techStack}</p>
        <p className="mt-2 text-sm font-semibold text-ink/70">
          {formatMoney(product.price, currency)}
        </p>
        <button
          type="button"
          onClick={() => addToCart(product, 1)}
          disabled={!product.inStock}
          className="btn-secondary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

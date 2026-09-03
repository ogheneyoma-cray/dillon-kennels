"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatProductMoney } from "@/lib/currency";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-tile transition-shadow duration-300 hover:shadow-lift">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-linen"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
            Popular
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent px-4 pb-3 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-sm font-bold leading-tight text-paper">
            {product.name}
          </h3>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-3 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {product.hours}h
          </span>
          <span className="inline-flex items-center gap-1 text-gold-dark">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.3 6.9-6.1-3.3-6.1 3.3 1.3-6.9-5-4.8 6.9-.9z" />
            </svg>
            {product.rating}
          </span>
          <span>{product.level}</span>
        </div>
        <p className="mt-3 text-base font-bold text-ink">
          {formatProductMoney(product, currency)}
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

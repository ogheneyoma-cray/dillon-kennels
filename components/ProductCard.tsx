"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group relative flex flex-col">
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
        {!product.inStock && (
          <span className="absolute left-3 top-3 bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-paper">
            Sold Out
          </span>
        )}
        {product.popular && product.inStock && (
          <span className="absolute left-3 top-3 bg-raspberry px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-paper">
            Best Seller
          </span>
        )}
        <span className="absolute right-3 top-3 border border-ink/15 bg-paper/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/70">
          {product.category}
        </span>
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-base leading-tight text-ink transition-colors group-hover:text-raspberry">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-bold text-ink/70">
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

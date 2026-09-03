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
    <div className="group relative flex flex-col border border-line bg-paper transition-shadow hover:shadow-tile">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-cream"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-paper">
            Sold Out
          </span>
        )}
        {product.popular && product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-paper">
            Best Seller
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-rust">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 font-display text-base font-medium leading-tight text-navy transition-colors group-hover:text-rust">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm font-bold text-ink">
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

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
        className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-mist shadow-tile transition-transform duration-300 ease-out group-hover:-translate-y-1"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-orange-dark shadow-tile">
            Popular
          </span>
        )}
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-ink/70 shadow-tile">
            Out of Stock
          </span>
        )}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-gold-dark">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-ink/50">{product.category}</p>
        <p className="mt-2 text-sm font-bold text-ink">
          {formatMoney(product.price, currency)}
        </p>
        <button
          type="button"
          onClick={() => addToCart(product, 1)}
          disabled={!product.inStock}
          className="btn-secondary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

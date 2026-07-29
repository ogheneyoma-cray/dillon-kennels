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
        className="relative block aspect-[3/4] overflow-hidden bg-graphite"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {!product.inStock && (
          <span className="absolute left-0 top-4 bg-ember px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-bone">
            Sold Out
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
          disabled={!product.inStock}
          className="absolute inset-x-0 bottom-0 min-h-[44px] translate-y-full bg-acid text-xs font-bold uppercase tracking-widest2 text-noir opacity-0 transition-all duration-300 hover:bg-bone group-hover:translate-y-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Quick Add" : "Unavailable"}
        </button>
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[10px] font-semibold uppercase tracking-widest2 text-muted">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 font-body text-sm font-semibold uppercase tracking-wide text-bone transition-colors group-hover:text-acid">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-muted">
          {formatMoney(product.price, currency)}
        </p>
      </div>
    </div>
  );
}

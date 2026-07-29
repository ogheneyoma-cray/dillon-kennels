"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-blush"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {!product.inStock && (
          <span className="absolute left-0 top-4 bg-plum px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-ivory">
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
          className="absolute inset-x-3 bottom-3 min-h-[40px] translate-y-2 rounded-full bg-ivory/95 text-[11px] font-semibold uppercase tracking-widest2 text-ink opacity-0 shadow-sm transition-all duration-300 hover:bg-plum hover:text-ivory group-hover:translate-y-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Quick Add" : "Unavailable"}
        </button>
      </Link>
      <div className="mt-4 flex flex-1 flex-col items-center text-center">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-body text-sm uppercase tracking-wide text-ink transition-colors group-hover:text-rose">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-ink/60">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

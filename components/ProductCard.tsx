"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import ProductCover from "@/components/ProductCover";
import StarRating from "@/components/StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-lg bg-sand"
      >
        <ProductCover
          src={product.image}
          alt={`${product.name} product photo`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && <span className="badge-ribbon">Bestseller</span>}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <StarRating rating={product.rating} />
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-2 font-display text-base leading-snug text-ink transition-colors group-hover:text-clay">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
          {product.volume}
        </p>
        <p className="mt-2 text-sm font-semibold text-clay">
          {formatMoney(product.price, currency)}
        </p>
        <button
          type="button"
          onClick={() => addToCart(product, 1)}
          className="btn-secondary mt-4 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

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
    <div className="boarding-pass group flex">
      <Link href={`/shop/${product.slug}`} className="relative block w-2/5 shrink-0 overflow-hidden bg-mist">
        <ProductCover
          src={product.image}
          alt={`${product.name} preview`}
          sizes="(min-width: 1024px) 15vw, 40vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.popular && <span className="badge-ribbon">Popular</span>}
      </Link>

      {/* Perforated stub divider */}
      <div className="relative w-0 border-l-2 border-dashed border-line">
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-mist" />
        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-full bg-mist" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <p className="font-display text-[10px] uppercase tracking-widest2 text-ink-soft">
            {product.category}
          </p>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink transition-colors group-hover:text-beacon-dark">
              {product.name}
            </h3>
          </Link>
          <div className="mt-1.5 flex items-center gap-1.5">
            <StarRating rating={product.rating} />
            <span className="text-xs text-ink-soft">({product.rating}.0)</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-base font-bold text-beacon-dark">
            {formatMoney(product.price, currency)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex min-h-[34px] items-center justify-center rounded-md bg-gate px-3 font-display text-[11px] font-bold text-paper transition-colors hover:bg-gate-soft"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

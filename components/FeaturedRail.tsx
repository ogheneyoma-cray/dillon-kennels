"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BookCover from "@/components/BookCover";

const TABS = ["Bestsellers", "New Releases", "Top Rated"] as const;
type Tab = (typeof TABS)[number];

function shownFor(tab: Tab) {
  if (tab === "Bestsellers") return products.filter((p) => p.popular).slice(0, 4);
  if (tab === "Top Rated") return [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return [...products].sort((a, b) => b.id - a.id).slice(0, 4);
}

/**
 * Tabbed product rail beside a navy promo panel, matching the reference's
 * "Featured Books" band with its side offer card.
 */
export default function FeaturedRail() {
  const [tab, setTab] = useState<Tab>("Bestsellers");
  const shown = shownFor(tab);
  const promoBooks = products.filter((p) => p.popular).slice(0, 2);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-ink/10 pb-4">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
              tab === t ? "border-b-2 border-gold text-ink" : "text-ink/50 hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="relative flex flex-col items-center overflow-hidden bg-ink px-6 py-10 text-center text-cream">
          <div className="relative flex items-center justify-center">
            {promoBooks[1] && (
              <div className="w-20 rotate-6">
                <BookCover
                  src={promoBooks[1].image}
                  alt={`${promoBooks[1].name} cover`}
                  className="shadow-lift w-full"
                />
              </div>
            )}
            {promoBooks[0] && (
              <div className="-mx-3 w-24">
                <BookCover
                  src={promoBooks[0].image}
                  alt={`${promoBooks[0].name} cover`}
                  className="shadow-lift w-full"
                />
              </div>
            )}
          </div>
          <p className="mt-8 font-display text-lg leading-snug">Get 10% Off</p>
          <p className="mt-1 font-display text-2xl font-bold leading-snug text-gold">Your First Order</p>
          <p className="mt-3 text-xs uppercase tracking-widest2 text-cream/60">On any purchase over $80</p>
          <Link
            href="/shop"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-cream"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

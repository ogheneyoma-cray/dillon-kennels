"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Tab = "All" | Category;

const TABS: Tab[] = ["All", ...categories];

/**
 * Tabbed product grid. The reference heads its main product area with a row of
 * category tabs that swap the grid beneath without moving the page — this does
 * the same, filtering the catalogue client-side.
 */
export default function ProductTabs({ limit = 8 }: { limit?: number }) {
  const [tab, setTab] = useState<Tab>("All");

  const shown = (
    tab === "All" ? products : products.filter((p) => p.category === tab)
  ).slice(0, limit);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
        {TABS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setTab(option)}
            aria-pressed={tab === option}
            className={`relative pb-1.5 font-display text-[12px] font-semibold uppercase tracking-wide2 transition-colors ${
              tab === option ? "text-rose" : "text-body hover:text-ink"
            }`}
          >
            {option}
            {tab === option && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-rose"
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

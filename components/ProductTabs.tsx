"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Tab = "All" | Category;

const TABS: Tab[] = ["All", ...categories];

/**
 * Genre-tabbed grid. The reference heads its "Book of the Month" band with a
 * row of pill filters that swap the grid beneath without moving the page.
 */
export default function ProductTabs({ limit = 10 }: { limit?: number }) {
  const [tab, setTab] = useState<Tab>("All");

  const shown = (
    tab === "All" ? products : products.filter((p) => p.category === tab)
  ).slice(0, limit);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {TABS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setTab(option)}
            aria-pressed={tab === option}
            className={`rounded-pill border px-5 py-2.5 font-display text-[13px] font-semibold uppercase tracking-wide2 transition-colors ${
              tab === option
                ? "border-clay bg-clay text-paper"
                : "border-line bg-paper text-slate hover:border-clay hover:text-clay"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-5">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

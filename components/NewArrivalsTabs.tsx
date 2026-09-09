"use client";

import { useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

/**
 * Horizontal, scroll-snapping tag rail — not a tabbed static grid. Tags sit
 * left-aligned like a filter bar; matching products scroll sideways in a
 * single row rather than reflowing into a multi-column grid.
 */
export default function NewArrivalsTabs() {
  const [active, setActive] = useState<(typeof categories)[number] | "all">("all");
  const shown = (active === "all" ? products : products.filter((p) => p.category === active)).slice(
    0,
    8
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4 font-display text-sm">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded px-3 py-1.5 transition-colors ${
            active === "all" ? "bg-void text-term" : "text-ink-soft hover:text-ink"
          }`}
        >
          #all
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded px-3 py-1.5 transition-colors ${
              active === category ? "bg-void text-term" : "text-ink-soft hover:text-ink"
            }`}
          >
            #{category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          </button>
        ))}
      </div>
      <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {shown.map((product) => (
          <div key={product.id} className="w-[78vw] shrink-0 snap-start sm:w-[320px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

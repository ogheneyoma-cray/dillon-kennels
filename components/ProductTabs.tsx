"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Tab = { id: string; label: string; products: Product[] };

/**
 * The tabbed product grid from the reference layout: New Arrivals / Best
 * Sellers / On Sale switched in place above a four-column grid.
 */
export default function ProductTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="shell pt-20 lg:pt-28">
      <div className="flex flex-col items-center text-center">
        <p className="kicker">The edit</p>
        <div
          role="tablist"
          aria-label="Product collections"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`tab-${tab.id}`}
              aria-selected={tab.id === active}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`font-display text-3xl font-light transition-colors sm:text-[2.5rem] ${
                tab.id === active
                  ? "text-midnight"
                  : "text-midnight/25 hover:text-midnight/55"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7"
      >
        {current.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link href="/shop" className="link-rule">
          View all products
        </Link>
      </div>
    </section>
  );
}

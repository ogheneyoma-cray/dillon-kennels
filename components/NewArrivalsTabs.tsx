"use client";

import { useMemo, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const TABS = ["New In", "Best Sellers", "Top Picks", "Trending"] as const;
type Tab = (typeof TABS)[number];

export default function NewArrivalsTabs({ products }: { products: Product[] }) {
  const [tab, setTab] = useState<Tab>("New In");

  const shown = useMemo(() => {
    switch (tab) {
      case "Best Sellers":
        return products.filter((p) => p.popular).concat(products).slice(0, 8);
      case "Top Picks":
        return [...products].sort((a, b) => b.price - a.price).slice(0, 8);
      case "Trending":
        return [...products].reverse().slice(0, 8);
      case "New In":
      default:
        return products.slice(0, 8);
    }
  }, [tab, products]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-ink/10 pb-4">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
              tab === t ? "text-orange" : "text-ink/50 hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
        {shown.map((product) => (
          <ProductCard key={`${tab}-${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
}

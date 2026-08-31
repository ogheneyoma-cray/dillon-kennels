"use client";

import { useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function NewArrivalsTabs() {
  const [active, setActive] = useState(categories[0]);
  const shown = products.filter((p) => p.category === active).slice(0, 6);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === category
                ? "bg-navy text-paper"
                : "bg-blush text-ink-soft hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

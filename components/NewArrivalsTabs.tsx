"use client";

import { useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function NewArrivalsTabs() {
  const [active, setActive] = useState(categories[0]);
  const shown = products.filter((p) => p.category === active).slice(0, 6);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-line pb-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`text-sm font-medium uppercase tracking-wider transition-colors ${
              active === category
                ? "border-b-2 border-clay pb-1 text-clay"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

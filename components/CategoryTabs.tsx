"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryTabs() {
  const [active, setActive] = useState<Category>(categories[0]);
  const list = products.filter((product) => product.category === active).slice(0, 4);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`tab-pill ${
              active === category
                ? "border-rust text-navy"
                : "border-transparent text-ink-soft hover:text-navy"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

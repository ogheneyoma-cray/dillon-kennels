"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/products";

export default function ShopFilters({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Link
        href="/shop"
        className={`flex min-h-[40px] items-center border px-5 text-xs font-bold uppercase tracking-widest2 transition-colors ${
          !active
            ? "border-acid bg-acid text-noir"
            : "border-bone/25 text-bone hover:border-acid hover:text-acid"
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category}
          href={`/shop?category=${encodeURIComponent(category)}`}
          className={`flex min-h-[40px] items-center border px-5 text-xs font-bold uppercase tracking-widest2 transition-colors ${
            active === category
              ? "border-acid bg-acid text-noir"
              : "border-bone/25 text-bone hover:border-acid hover:text-acid"
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

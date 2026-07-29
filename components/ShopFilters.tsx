"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/products";

export default function ShopFilters({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Link
        href="/shop"
        className={`flex min-h-[40px] items-center rounded-full border px-5 text-xs font-semibold uppercase tracking-widest2 transition-colors ${
          !active
            ? "border-plum bg-plum text-ivory"
            : "border-ink/20 text-ink hover:border-rose hover:text-rose"
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category}
          href={`/shop?category=${encodeURIComponent(category)}`}
          className={`flex min-h-[40px] items-center rounded-full border px-5 text-xs font-semibold uppercase tracking-widest2 transition-colors ${
            active === category
              ? "border-plum bg-plum text-ivory"
              : "border-ink/20 text-ink hover:border-rose hover:text-rose"
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

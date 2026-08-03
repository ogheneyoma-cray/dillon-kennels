"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Category, categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

const SORTS: { id: Sort; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "name", label: "Alphabetical" },
];

function isCategory(value: string | null): value is Category {
  return value !== null && (categories as string[]).includes(value);
}

export default function ShopBrowser() {
  const params = useSearchParams();
  const category = params.get("category");
  const saleOnly = params.get("filter") === "sale";
  const [sort, setSort] = useState<Sort>("featured");

  const activeCategory = isCategory(category) ? category : null;

  const visible = useMemo(() => {
    let list = products;
    if (activeCategory) {
      list = list.filter((product) => product.category === activeCategory);
    }
    if (saleOnly) {
      list = list.filter((product) => product.compareAt !== undefined);
    }

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [activeCategory, saleOnly, sort]);

  return (
    <div className="shell py-14 lg:py-16">
      <div className="flex flex-col gap-6 border-b border-midnight/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/shop"
              className={`inline-flex rounded-full border px-4 py-2 text-[13px] transition-colors ${
                !activeCategory && !saleOnly
                  ? "border-midnight bg-midnight text-linen"
                  : "border-midnight/15 text-midnight hover:border-midnight"
              }`}
            >
              All ({products.length})
            </Link>
          </li>
          {categories.map((item) => (
            <li key={item}>
              <Link
                href={`/shop?category=${encodeURIComponent(item)}`}
                className={`inline-flex rounded-full border px-4 py-2 text-[13px] transition-colors ${
                  activeCategory === item
                    ? "border-midnight bg-midnight text-linen"
                    : "border-midnight/15 text-midnight hover:border-midnight"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/shop?filter=sale"
              className={`inline-flex rounded-full border px-4 py-2 text-[13px] transition-colors ${
                saleOnly
                  ? "border-orchid bg-orchid text-linen"
                  : "border-orchid/40 text-orchid hover:border-orchid"
              }`}
            >
              On sale
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="whitespace-nowrap text-[12px] uppercase tracking-wide3 text-slate"
          >
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className="min-h-[42px] rounded-full border border-midnight/15 bg-linen px-4 text-[13px] text-midnight focus:border-orchid focus:outline-none"
          >
            {SORTS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-[13px] text-slate" role="status" aria-live="polite">
        Showing {visible.length} of {products.length} pieces
      </p>

      {visible.length === 0 ? (
        <p className="py-24 text-center text-[15px] text-slate">
          Nothing matches that filter yet.{" "}
          <Link href="/shop" className="text-orchid underline underline-offset-4">
            View everything
          </Link>
          .
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

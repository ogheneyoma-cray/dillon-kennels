"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Category, categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating" | "name";

const SORTS: { id: Sort; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Highest rated" },
  { id: "name", label: "Alphabetical" },
];

function isCategory(value: string | null): value is Category {
  return value !== null && (categories as string[]).includes(value);
}

export default function ShopBrowser() {
  const params = useSearchParams();
  const category = params.get("category");
  const query = (params.get("q") ?? "").trim().toLowerCase();
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
    if (query) {
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.fabric.toLowerCase().includes(query)
      );
    }

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [activeCategory, query, saleOnly, sort]);

  const chip = (active: boolean) =>
    `inline-flex px-4 py-2 text-[11px] font-bold uppercase tracking-wide2 transition-colors ${
      active
        ? "bg-onyx text-paper"
        : "border border-line text-onyx hover:border-onyx"
    }`;

  return (
    <div className="frame py-14">
      <div className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/shop"
              className={chip(!activeCategory && !saleOnly && !query)}
            >
              All ({products.length})
            </Link>
          </li>
          {categories.map((item) => (
            <li key={item}>
              <Link
                href={`/shop?category=${encodeURIComponent(item)}`}
                className={chip(activeCategory === item)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/shop?filter=sale"
              className={`inline-flex px-4 py-2 text-[11px] font-bold uppercase tracking-wide2 transition-colors ${
                saleOnly
                  ? "bg-camel text-paper"
                  : "border border-camel/50 text-camel hover:border-camel"
              }`}
            >
              On sale
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="whitespace-nowrap text-[11px] font-bold uppercase tracking-wide2 text-ash"
          >
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className="min-h-[42px] border border-line bg-paper px-4 text-[13px] text-onyx focus:border-camel focus:outline-none"
          >
            {SORTS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-[13px] text-ash" role="status" aria-live="polite">
        Showing {visible.length} of {products.length} pieces
        {query && (
          <>
            {" "}
            for <span className="font-semibold text-onyx">“{query}”</span>
          </>
        )}
      </p>

      {visible.length === 0 ? (
        <p className="py-24 text-center text-[15px] text-ash">
          Nothing matches that yet.{" "}
          <Link
            href="/shop"
            className="font-semibold text-camel underline underline-offset-4"
          >
            View everything
          </Link>
          .
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

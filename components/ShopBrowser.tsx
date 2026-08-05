"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

const SORTS: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

/**
 * Shop page body: a left sidebar of category and price filters with the grid
 * at the right, matching the reference's shop layout. Category and search term
 * seed from the query string so header search and footer links land correctly.
 */
export default function ShopBrowser() {
  const params = useSearchParams();
  const initialCategory = params.get("category") as Category | null;
  const saleOnly = params.get("filter") === "sale";
  const query = (params.get("q") ?? "").trim().toLowerCase();

  const [category, setCategory] = useState<Category | "All">(
    initialCategory && categories.includes(initialCategory)
      ? initialCategory
      : "All"
  );
  const [maxPrice, setMaxPrice] = useState(40);
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    let list = products.filter((product) => product.price <= maxPrice);

    if (category !== "All") {
      list = list.filter((product) => product.category === category);
    }
    if (saleOnly) {
      list = list.filter((product) => product.compareAt !== undefined);
    }
    if (query) {
      list = list.filter((product) =>
        `${product.name} ${product.category} ${product.upper}`
          .toLowerCase()
          .includes(query)
      );
    }

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating")
      sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    return sorted;
  }, [category, maxPrice, query, saleOnly, sort]);

  return (
    <div className="wrap grid gap-10 py-14 lg:grid-cols-[240px_1fr] lg:py-20">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="border border-line p-6">
          <p className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
            Categories
            <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
          </p>
          <ul className="mt-5 space-y-3">
            {(["All", ...categories] as const).map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={category === option}
                  className={`text-sm transition-colors ${
                    category === option
                      ? "font-semibold text-rose"
                      : "text-body hover:text-rose"
                  }`}
                >
                  {option}
                  <span className="ml-1.5 text-[11px] text-muted">
                    (
                    {option === "All"
                      ? products.length
                      : products.filter((p) => p.category === option).length}
                    )
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border border-line p-6">
          <p className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
            Price
            <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
          </p>
          <label htmlFor="max-price" className="mt-5 block text-sm text-body">
            Up to <span className="font-semibold text-rose">${maxPrice}</span>
          </label>
          <input
            id="max-price"
            type="range"
            min={20}
            max={40}
            step={1}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-3 w-full accent-rose"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted">
            <span>$20</span>
            <span>$40</span>
          </div>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 border border-line px-5 py-4">
          <p className="text-sm text-body">
            Showing <span className="font-semibold text-ink">{results.length}</span>{" "}
            of {products.length} pairs
            {query && (
              <>
                {" "}
                for <span className="font-semibold text-ink">“{query}”</span>
              </>
            )}
          </p>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted"
            >
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="min-h-[38px] border border-line bg-paper px-3 text-sm text-ink focus:border-rose focus:outline-none"
            >
              {SORTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="mt-12 text-center text-sm text-body">
            No pairs match those filters. Try widening the price range or
            choosing another category.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-5 xl:grid-cols-3">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

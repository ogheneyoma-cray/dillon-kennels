"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating" | "title";

const SORTS: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "title", label: "Title A–Z" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

/** Every author in the catalogue, alphabetical. */
const AUTHORS = Array.from(new Set(products.map((p) => p.author))).sort();

/**
 * Shop body: a left sidebar of genre, author and price filters with the grid
 * at the right, matching the reference's shop layout. Genre and search term
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
  const [author, setAuthor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(40);
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    let list = products.filter((product) => product.price <= maxPrice);

    if (category !== "All") {
      list = list.filter((product) => product.category === category);
    }
    if (author !== "All") {
      list = list.filter((product) => product.author === author);
    }
    if (saleOnly) {
      list = list.filter((product) => product.compareAt !== undefined);
    }
    if (query) {
      list = list.filter((product) =>
        `${product.name} ${product.author} ${product.category}`
          .toLowerCase()
          .includes(query)
      );
    }

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "title") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "rating")
      sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    return sorted;
  }, [author, category, maxPrice, query, saleOnly, sort]);

  return (
    <div className="wrap grid gap-10 py-14 lg:grid-cols-[250px_1fr] lg:py-20">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="card p-6">
          <h2 className="font-display text-[17px] font-bold text-slate">
            Genres
            <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
          </h2>
          <ul className="mt-5 space-y-3">
            {(["All", ...categories] as const).map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={category === option}
                  className={`text-sm transition-colors ${
                    category === option
                      ? "font-semibold text-clay"
                      : "text-body hover:text-clay"
                  }`}
                >
                  {option}
                  <span className="ml-1.5 text-[12px] text-muted">
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

        <div className="card mt-6 p-6">
          <h2 className="font-display text-[17px] font-bold text-slate">
            Author
            <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
          </h2>
          <label htmlFor="author-filter" className="sr-only">
            Filter by author
          </label>
          <select
            id="author-filter"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="mt-5 min-h-[46px] w-full rounded-pill border border-line bg-cream px-4 text-sm text-slate focus:border-clay focus:outline-none"
          >
            <option value="All">All authors</option>
            {AUTHORS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="card mt-6 p-6">
          <h2 className="font-display text-[17px] font-bold text-slate">
            Price
            <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
          </h2>
          <label htmlFor="max-price" className="mt-5 block text-sm text-body">
            Up to <span className="font-semibold text-clay">${maxPrice}</span>
          </label>
          <input
            id="max-price"
            type="range"
            min={20}
            max={40}
            step={1}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-3 w-full accent-clay"
          />
          <div className="mt-1 flex justify-between text-[12px] text-muted">
            <span>$20</span>
            <span>$40</span>
          </div>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-paper px-6 py-4">
          <p className="text-sm text-body">
            Showing{" "}
            <span className="font-semibold text-slate">{results.length}</span> of{" "}
            {products.length} titles
            {query && (
              <>
                {" "}
                for <span className="font-semibold text-slate">“{query}”</span>
              </>
            )}
          </p>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted"
            >
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="min-h-[42px] rounded-pill border border-line bg-cream px-4 text-sm text-slate focus:border-clay focus:outline-none"
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
            No titles match those filters. Try widening the price range or
            clearing the author.
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

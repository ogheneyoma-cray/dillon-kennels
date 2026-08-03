"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { categories } from "@/data/products";

/**
 * Category select + keyword box, styled as the split bar from the reference
 * layout. Submitting pushes the terms onto /shop as query parameters.
 */
export default function ShopSearch() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (query.trim()) params.set("q", query.trim());
    const search = params.toString();
    router.push(search ? `/shop?${search}` : "/shop");
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex flex-col overflow-hidden rounded-sm bg-white shadow-panel sm:flex-row"
    >
      <label htmlFor="search-category" className="sr-only">
        Category
      </label>
      <select
        id="search-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="min-h-[58px] shrink-0 border-b border-pine/10 bg-pine px-5 text-[12px] font-bold uppercase tracking-bold3 text-canvas focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tangerine sm:w-[220px] sm:border-b-0"
      >
        <option value="">All categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <label htmlFor="search-query" className="sr-only">
        Search products
      </label>
      <input
        id="search-query"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a tee, a dress, a pair of boots…"
        className="min-h-[58px] flex-1 px-5 text-sm text-pine placeholder:text-mudd/50 focus:outline-none"
      />

      <button
        type="submit"
        aria-label="Search"
        className="flex min-h-[58px] items-center justify-center gap-2 bg-tangerine px-6 text-[12px] font-bold uppercase tracking-bold3 text-canvas transition-colors hover:bg-tangerine-dark sm:bg-white sm:px-6 sm:text-pine sm:hover:bg-shell"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="m16 16 4.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="sm:hidden">Search</span>
      </button>
    </form>
  );
}

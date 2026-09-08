import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Every product Myevolt offers, from website templates to dashboard kits and growth tooling, priced up front in USD or NGN.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = categories.includes(searchParams.category as Category)
    ? (searchParams.category as Category)
    : null;

  const shown = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="max-w-xl">
        <p className="eyebrow">Full Catalogue</p>
        <h1 className="section-heading mt-3">
          {activeCategory ?? "All Products"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Seven products across website templates, app and dashboard kits,
          and growth tooling — each priced up front. Prices convert
          automatically between US Dollars and Naira using the toggle in
          the header.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="/shop"
          className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            !activeCategory ? "border-teal bg-teal text-ink" : "border-ink/20 text-ink hover:border-teal hover:text-teal-dark"
          }`}
        >
          All
        </a>
        {categories.map((category) => (
          <a
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeCategory === category
                ? "border-teal bg-teal text-ink"
                : "border-ink/20 text-ink hover:border-teal hover:text-teal-dark"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

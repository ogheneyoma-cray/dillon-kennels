import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Every ebook Nedupe Limited offers, from business and self-development to technology, health and fiction, priced up front in USD or GHS.",
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
          {activeCategory ?? "All Ebooks"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Thirty ebooks across business, self-development, technology,
          health and fiction — each priced up front. Prices convert
          automatically between US Dollars and Ghana Cedis using the toggle
          in the header.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="/shop"
          className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            !activeCategory ? "border-sky bg-sky text-white" : "border-ink/20 text-ink hover:border-sky hover:text-sky-dark"
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
                ? "border-sky bg-sky text-white"
                : "border-ink/20 text-ink hover:border-sky hover:text-sky-dark"
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

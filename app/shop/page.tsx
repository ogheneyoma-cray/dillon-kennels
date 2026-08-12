import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Every technology support service Wazuri Technologies offers, from device repair to cloud migration, priced up front in USD or GHS.",
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
        <p className="eyebrow">Full Service List</p>
        <h1 className="section-heading mt-3">
          {activeCategory ?? "All Services"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Thirty services across device support, networking, cybersecurity,
          cloud and software — each priced up front. Prices convert
          automatically between US Dollars and Ghana Cedis using the toggle
          in the header.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="/shop"
          className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            !activeCategory ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink hover:border-rust hover:text-rust"
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
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 text-ink hover:border-rust hover:text-rust"
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

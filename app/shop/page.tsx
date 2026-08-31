import type { Metadata } from "next";
import Link from "next/link";
import { products, categories, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description: `Browse the full ${site.name} collection of dresses, tops, knitwear, outerwear, denim and accessories.`,
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category as Category | undefined;
  const isValidCategory = activeCategory && categories.includes(activeCategory);
  const list = isValidCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="max-w-xl">
        <p className="eyebrow">Full Collection</p>
        <h1 className="section-heading mt-3">
          {isValidCategory ? activeCategory : "Shop All"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Twenty pieces built for everyday wear. Prices shown convert
          automatically between US Dollars and Naira using the toggle in the
          header.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className={`border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
            !isValidCategory
              ? "border-raspberry bg-raspberry text-paper"
              : "border-ink/20 text-ink/70 hover:border-raspberry hover:text-raspberry"
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className={`border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              activeCategory === category
                ? "border-raspberry bg-raspberry text-paper"
                : "border-ink/20 text-ink/70 hover:border-raspberry hover:text-raspberry"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

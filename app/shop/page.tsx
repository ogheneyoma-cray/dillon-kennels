import type { Metadata } from "next";
import { products, CATEGORIES, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ShopFilters from "@/components/ShopFilters";

export const metadata: Metadata = {
  title: "Shop | Nudgenic",
  description:
    "Shop the full Nudgenic collection of women's dresses, tops, denim, outerwear, knitwear, footwear, and accessories.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category as Product["category"] | undefined;
  const isValidCategory =
    activeCategory && CATEGORIES.includes(activeCategory);
  const filtered = isValidCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Full Collection</p>
        <h1 className="section-heading mt-3">Shop All</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
          Fifty pieces across dresses, tops, denim, outerwear, knitwear,
          footwear, and accessories — every one designed for women who want
          clothes that work as hard as they do.
        </p>
      </div>

      <div className="mt-10">
        <ShopFilters active={isValidCategory ? activeCategory : undefined} />
      </div>

      <p className="mt-6 text-center text-xs uppercase tracking-widest2 text-ink/40">
        {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

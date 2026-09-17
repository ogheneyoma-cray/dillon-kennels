import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Browse all Richavaid themes, plugins, UI kits and page builders — priced in USD or NGN.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string; q?: string };
}) {
  const activeCategory = categories.includes(searchParams.category as Category)
    ? (searchParams.category as Category)
    : null;
  const query = searchParams.q?.trim().toLowerCase() ?? "";

  const shown = products.filter((product) => {
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container-page py-12 lg:py-16">
      <p className="eyebrow">Marketplace</p>
      <h1 className="section-heading mt-3">{activeCategory ?? "All Products"}</h1>
      {query && (
        <p className="mt-3 text-sm text-ink-soft">
          Showing results for{" "}
          <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="/shop"
          className={`rounded-full px-5 py-2.5 font-display text-xs font-semibold transition-colors ${
            !activeCategory
              ? "bg-violet text-white"
              : "bg-white text-ink-soft shadow-tile hover:text-ink"
          }`}
        >
          All
        </a>
        {categories.map((category) => (
          <a
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className={`rounded-full px-5 py-2.5 font-display text-xs font-semibold transition-colors ${
              activeCategory === category
                ? "bg-violet text-white"
                : "bg-white text-ink-soft shadow-tile hover:text-ink"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-soft">No products match that search.</p>
      )}
    </div>
  );
}

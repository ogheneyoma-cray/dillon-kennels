import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description: "Browse the full Evintat collection of dresses, tops, bottoms, outerwear and accessories.",
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
      ? product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container-page py-10 lg:py-16">
      <div className="max-w-xl text-center sm:mx-auto">
        <p className="eyebrow justify-center">Full Collection</p>
        <h1 className="section-heading mt-3">Shop All</h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <a
          href="/shop"
          className={`rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors ${
            !activeCategory ? "border-aubergine bg-aubergine text-oat" : "border-line text-ink-soft hover:border-aubergine hover:text-aubergine"
          }`}
        >
          All ({products.length})
        </a>
        {categories.map((category) => {
          const count = products.filter((p) => p.category === category).length;
          return (
            <a
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className={`rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === category ? "border-aubergine bg-aubergine text-oat" : "border-line text-ink-soft hover:border-aubergine hover:text-aubergine"
              }`}
            >
              {category} ({count})
            </a>
          );
        })}
      </div>

      {query && (
        <p className="mt-4 text-center text-sm text-ink-soft">
          Results for <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
        </p>
      )}

      {shown.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-soft">No pieces match that search.</p>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description: "Browse the full Spruce Savers catalog of IT support, network & security, cloud, setup and maintenance services.",
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
    <div className="container-page py-10 lg:py-14">
      <span className="tag-pill">Catalog</span>
      <h1 className="section-heading mt-3">{activeCategory ?? "All Services"}</h1>

      {/* Filters rendered as a horizontal pill row — not a sidebar list */}
      <nav className="mt-6 flex flex-wrap gap-2">
        <a
          href="/shop"
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            !activeCategory ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft hover:text-ink"
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
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === category ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft hover:text-ink"
              }`}
            >
              {category} ({count})
            </a>
          );
        })}
      </nav>

      {query && (
        <p className="mt-4 text-sm text-ink-soft">
          Results for <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
        </p>
      )}

      {shown.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-soft">No services match that search.</p>
      )}
    </div>
  );
}

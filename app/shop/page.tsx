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
    <div className="flex min-h-[calc(100vh-140px)] flex-col lg:flex-row">
      {/* Sidebar filters */}
      <aside className="shrink-0 border-b border-line bg-white px-6 py-6 lg:w-64 lg:border-b-0 lg:border-r lg:py-10">
        <p className="font-display text-[11px] font-semibold uppercase tracking-widest2 text-ink-soft">
          Filter by Category
        </p>
        <nav className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
          <a
            href="/shop"
            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors lg:rounded-lg ${
              !activeCategory
                ? "bg-violet text-white lg:bg-violet-pale lg:text-violet"
                : "text-ink-soft hover:bg-lavender hover:text-ink"
            }`}
          >
            All Products ({products.length})
          </a>
          {categories.map((category) => {
            const count = products.filter((p) => p.category === category).length;
            return (
              <a
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors lg:rounded-lg ${
                  activeCategory === category
                    ? "bg-violet text-white lg:bg-violet-pale lg:text-violet"
                    : "text-ink-soft hover:bg-lavender hover:text-ink"
                }`}
              >
                {category} ({count})
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Product listing */}
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {activeCategory ?? "All Products"}
            </h1>
            {query && (
              <p className="mt-1 text-sm text-ink-soft">
                Results for{" "}
                <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
              </p>
            )}
          </div>
          <p className="text-sm text-ink-soft">
            {shown.length} product{shown.length !== 1 ? "s" : ""}
          </p>
        </div>

        {shown.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {shown.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-ink-soft">No products match that search.</p>
        )}
      </main>
    </div>
  );
}

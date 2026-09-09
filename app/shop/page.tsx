import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Every theme and plugin Lawin Store stocks, from landing pages and e-commerce themes to admin dashboards and utility plugins, priced up front in USD or NGN.",
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
      ? product.name.toLowerCase().includes(query) || product.instructor.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container-page py-12 lg:py-16">
      <p className="eyebrow">Full Store</p>
      <h1 className="section-heading mt-3">{activeCategory ?? "All Products"}</h1>
      {query && (
        <p className="mt-3 text-sm text-ink-soft">
          Showing results for{" "}
          <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        {/* Sidebar category rail */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-bold uppercase tracking-widest2 text-ink-soft">
            Categories
          </p>
          <nav className="mt-4 flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            <a
              href="/shop"
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                !activeCategory
                  ? "bg-berry text-paper"
                  : "text-ink-soft hover:bg-sand hover:text-ink"
              }`}
            >
              All Products
            </a>
            {categories.map((category) => (
              <a
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-berry text-paper"
                    : "text-ink-soft hover:bg-sand hover:text-ink"
                }`}
              >
                {category}
              </a>
            ))}
          </nav>
          <div className="mt-8 hidden rounded-xl border border-line bg-sand p-5 lg:block">
            <p className="font-display text-sm font-bold text-ink">Priced in USD or NGN</p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
              Switch currency any time using the toggle in the header.
            </p>
          </div>
        </aside>

        {/* Product grid */}
        <div>
          {shown.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-ink-soft">No products match that search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

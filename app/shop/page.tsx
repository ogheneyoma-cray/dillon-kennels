import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Browse all Site Optex IT services — performance, security, cloud, networking and hardware — priced in USD or NGN.",
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
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Full Catalog</p>
      <h1 className="section-heading mt-3">All Services</h1>

      {/* top pill filter row, no sidebar */}
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="/shop"
          className={`border-2 border-ink px-4 py-2 font-display text-xs font-bold uppercase transition-colors ${
            !activeCategory ? "bg-ink text-optic" : "bg-white text-ink hover:bg-optic-pale"
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
              className={`border-2 border-ink px-4 py-2 font-display text-xs font-bold uppercase transition-colors ${
                activeCategory === category ? "bg-ink text-optic" : "bg-white text-ink hover:bg-optic-pale"
              }`}
            >
              {category} ({count})
            </a>
          );
        })}
      </div>

      {query && (
        <p className="mt-4 text-sm text-ink-soft">
          Results for <span className="font-bold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
        </p>
      )}

      {shown.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

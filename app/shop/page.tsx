import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Every IT service Shams Light offers, from website builds and cybersecurity to cloud, helpdesk and data backup, priced up front in USD or NGN.",
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
      <div className="max-w-xl">
        <p className="eyebrow">Full Range</p>
        <h1 className="section-heading mt-3">{activeCategory ?? "All Services"}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          IT services across web development, cybersecurity, cloud
          infrastructure, helpdesk support and data backup — each priced up
          front. Prices convert automatically between US Dollars and
          Nigerian Naira using the toggle in the header.
        </p>
        {query && (
          <p className="mt-3 text-sm text-ink-soft">
            Showing results for{" "}
            <span className="font-semibold text-ink">&ldquo;{searchParams.q}&rdquo;</span>
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="/shop"
          className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            !activeCategory ? "bg-dusk text-paper" : "bg-mist text-ink-soft hover:text-ink"
          }`}
        >
          All
        </a>
        {categories.map((category) => (
          <a
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeCategory === category
                ? "bg-dusk text-paper"
                : "bg-mist text-ink-soft hover:text-ink"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
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

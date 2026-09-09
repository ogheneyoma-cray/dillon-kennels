import type { Metadata } from "next";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop | ${site.name}`,
  description:
    "Every product Silverpoodles stocks, from UI kits and boilerplates to admin panels, browser extensions and API tools, priced up front in USD or NGN.",
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

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="/shop"
          className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
            !activeCategory
              ? "border-fuchsia bg-fuchsia text-paper"
              : "border-line bg-paper text-ink hover:border-fuchsia hover:text-fuchsia"
          }`}
        >
          All Products
        </a>
        {categories.map((category) => (
          <a
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              activeCategory === category
                ? "border-fuchsia bg-fuchsia text-paper"
                : "border-line bg-paper text-ink hover:border-fuchsia hover:text-fuchsia"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 xl:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
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

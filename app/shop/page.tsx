import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop | Dillon Kennels",
  description:
    "Browse the full Dillon Kennels collection of clothing, footwear, and accessories.",
};

export default function ShopPage() {
  return (
    <div className="container-page py-12 lg:py-16">
      <div className="max-w-xl">
        <p className="eyebrow">Full Collection</p>
        <h1 className="section-heading mt-3">Shop All</h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Twenty pieces, each rooted in West African textile heritage and cut
          for everyday wear. Prices shown convert automatically between Naira
          and US Dollars using the toggle in the header.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

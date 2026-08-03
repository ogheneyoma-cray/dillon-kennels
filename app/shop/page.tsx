import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop everything",
  description:
    "The full Adom Attic collection — tees, denim, skirts, hoodies, jackets and trainers for teenagers, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop"
        intro={`${products.length} pieces, none of them over $40. Switch currency in the header to see everything in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="frame py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

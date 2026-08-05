import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "All titles",
  description:
    "The full Coquinate catalogue — science fiction, fantasy, romance, mystery and literary fiction in EPUB, MOBI and PDF, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="All titles"
        crumb="Shop"
        intro={`${products.length} books across ${categories.length} genres, none of them over $40. Switch the currency in the top bar to read every price in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="wrap py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

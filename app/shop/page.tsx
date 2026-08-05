import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop all footwear",
  description:
    "The full Crewsita range — formal shoes, loafers, heels, flats and sneakers for men and women, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop all footwear"
        crumb="Shop"
        intro={`${products.length} pairs across ${categories.length} categories, none of them over $40. Switch the currency in the header to read every price in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="wrap py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

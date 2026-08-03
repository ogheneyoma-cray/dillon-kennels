import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop all kidswear",
  description:
    "The full Anikoda collection — tees, dresses, shorts, outerwear, sets and shoes for children, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Everything we make"
        crumb="Shop"
        intro={`${products.length} pieces for ages 6 months to 11 years, cut in Ilorin and priced between $20 and $40. Switch currency in the header to see prices in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="boxed py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

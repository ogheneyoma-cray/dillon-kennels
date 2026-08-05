import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "The collection",
  description:
    "The full Mydriad collection — suits, blazers, dinner jackets and waistcoats for men, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="The collection"
        crumb="Shop"
        intro={`${products.length} pieces across four categories, none of them over $40. Use the converter in the footer, or the switch in the header, to read every price in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="wrap py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

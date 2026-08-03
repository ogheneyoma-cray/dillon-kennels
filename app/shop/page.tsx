import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop all sleepwear",
  description:
    "The full Xira Dix collection — slips, nightdresses, pyjama sets, robes, kimonos and lounge sets for men and women, priced in USD or NGN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        kicker="The collection"
        title="Every piece we make"
        crumb="Shop"
        intro={`${products.length} pieces of nightwear for men and women, cut in Lagos and priced between $22 and $40. Switch the currency in the top bar to see everything in naira.`}
      />
      {/* useSearchParams needs a Suspense boundary during static prerender. */}
      <Suspense fallback={<div className="shell py-24" />}>
        <ShopBrowser />
      </Suspense>
    </>
  );
}

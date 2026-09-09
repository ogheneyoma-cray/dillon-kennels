import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewArrivalsTabs from "@/components/NewArrivalsTabs";
import NewsletterForm from "@/components/NewsletterForm";
import CategoryIconGrid from "@/components/CategoryIconGrid";
import { site } from "@/lib/site";

const CHECKLIST = [
  "No subscriptions — pay once, own the code forever.",
  "Every product ships with source files, not just a preview.",
  "Prices convert instantly between USD and NGN.",
  "Mastercard and Visa checkout, nothing else to configure.",
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero: centered terminal window, not a split two-column layout */}
      <section className="relative overflow-hidden bg-void">
        <div className="absolute inset-0 bg-dot-grid bg-dots opacity-30" />
        <div className="container-page relative py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs uppercase tracking-widest2 text-term">
              $ npx create-aims-i-tech-app
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-paper sm:text-5xl">
              Software &amp; web dev,
              <br />
              <span className="text-term">ready to ship.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-paper/70">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse the store
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-paper underline decoration-term decoration-2 underline-offset-4"
              >
                See what&apos;s new →
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-void-soft shadow-lift">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="window-dot bg-[#FF5F57]" />
              <span className="window-dot bg-[#FEBC2E]" />
              <span className="window-dot bg-[#28C840]" />
              <span className="ml-3 font-display text-xs text-paper/50">checkout.tsx</span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-display text-[13px] leading-relaxed text-paper/80">
              <code>
                <span className="text-term">const</span> order = {"{"}
                {"\n"}  product: <span className="text-term">{'"nextjs-saas-starter-kit"'}</span>,
                {"\n"}  price: <span className="text-term">39</span>,
                {"\n"}  currency: <span className="text-term">{'"USD"'}</span> | <span className="text-term">{'"NGN"'}</span>,
                {"\n"}  payment: [<span className="text-term">{'"mastercard"'}</span>, <span className="text-term">{'"visa"'}</span>],
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Directory listing of categories */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Browse by directory</p>
          <h2 className="section-heading mt-3">Find What You&apos;re Building</h2>
          <div className="mt-8">
            <CategoryIconGrid categories={categories} />
          </div>
        </div>
      </section>

      {/* Products, horizontal scroll rail with tag filters */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Product index</p>
          <h2 className="section-heading mt-3">Browse the Catalog</h2>
          <div className="mt-8">
            <NewArrivalsTabs />
          </div>
          <div className="mt-4 flex justify-center">
            <Link href="/shop" className="btn-secondary">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Why us — single-column comment block, not a card grid */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow">Why {site.wordmark}</p>
            <div className="mt-6 rounded-lg border border-line bg-void p-6 font-display text-sm leading-loose text-paper/80 sm:p-8">
              <p className="text-paper/40">{"/**"}</p>
              {CHECKLIST.map((line) => (
                <p key={line}>
                  <span className="text-paper/40"> * </span>
                  <span className="text-term">✓</span> {line}
                </p>
              ))}
              <p className="text-paper/40">{" */"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products grid */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Most purchased</p>
                <h2 className="section-heading mt-3">Top Sellers</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View full catalog →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter — inline terminal prompt bar */}
      <section className="border-t border-line bg-void text-paper">
        <div className="container-page flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold">Get new drops in your inbox</p>
            <p className="mt-1 text-sm text-paper/60">
              Occasional new products and discounts — no spam.
            </p>
          </div>
          <div className="w-full sm:max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

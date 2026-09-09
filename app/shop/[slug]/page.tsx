import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";
import ProductCover from "@/components/ProductCover";
import StarRating from "@/components/StarRating";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: `Product Not Found | ${site.name}` };
  }
  return {
    title: `${product.name} | ${site.name}`,
    description: product.description.slice(0, 155),
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container-page py-10 lg:py-16">
      <nav className="mb-8 text-xs uppercase tracking-wider text-ink-soft">
        <Link href="/" className="hover:text-berry">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-berry">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-line shadow-lift">
            <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </div>
            <div className="relative aspect-[4/3] w-full bg-sand">
              <ProductCover
                src={product.image}
                alt={`${product.name} preview`}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-wider text-ink-soft">
            {product.instructor}
          </p>
          <StarRating rating={product.rating} className="mt-3" />
          <ProductPrice
            priceUsd={product.price}
            className="mt-4 block text-xl font-semibold text-berry"
          />

          <p className="mt-6 text-base leading-relaxed text-ink/80">
            {product.description}
          </p>

          <div className="mt-8 border-t border-line pt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-ink-soft">
            <div className="flex justify-between">
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt>License</dt>
              <dd>Single site, unlimited use</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd>Instant download, source files included</dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-14">
          <h2 className="section-heading">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

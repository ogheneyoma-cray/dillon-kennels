import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";
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
    return { title: `Course Not Found | ${site.name}` };
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
      <nav className="mb-8 text-xs font-semibold uppercase tracking-wide text-ink/50">
        <Link href="/" className="hover:text-indigo">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-indigo">
          Courses
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-linen">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1 text-gold-dark">★ {product.rating}</span>
            <span>{product.hours} hours</span>
            <span>{product.level}</span>
          </div>
          <ProductPrice
            product={product}
            className="mt-4 block text-2xl font-bold text-indigo"
          />

          <p className="mt-6 text-base leading-relaxed text-ink/80">
            {product.description}
          </p>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-8 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/70">
            <div className="flex justify-between">
              <dt>Availability</dt>
              <dd className={product.inStock ? "text-indigo-dark" : "text-ink/50"}>
                {product.inStock ? "Available" : "Unavailable"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Format</dt>
              <dd>{product.format}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Access</dt>
              <dd>Instant, lifetime access after checkout</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-ink/50">
            Questions before enrolling? Visit our{" "}
            <Link href="/contact" className="underline hover:text-indigo">
              Contact page
            </Link>
            .
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-ink/10 pt-14">
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

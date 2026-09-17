import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: `Product Not Found | ${site.name}` };
  }
  return {
    title: `${product.name} | ${site.name}`,
    description: product.description.slice(0, 155),
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-page py-10 lg:py-16">
      <nav className="mb-8 text-xs font-semibold uppercase tracking-wider text-ink-soft">
        <Link href="/" className="hover:text-clay-dark">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-clay-dark">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-clay-pale">
          <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <StarRating rating={product.rating} />
            <ProductPrice priceUsd={product.price} className="font-display text-xl font-bold text-clay-dark" />
          </div>

          <p className="mt-6 text-base leading-relaxed text-ink-soft">{product.description}</p>

          <div className="mt-8 border-t border-line pt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-ink-soft">
            <div className="flex justify-between">
              <dt>Availability</dt>
              <dd className={product.inStock ? "font-semibold text-sage" : "font-semibold text-clay-dark"}>
                {product.inStock ? "In Stock" : "Sold Out"}
              </dd>
            </div>
            <div className="flex justify-between"><dt>Category</dt><dd>{product.category}</dd></div>
            <div className="flex justify-between"><dt>Delivery</dt><dd>3-7 business days across Nigeria</dd></div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-14">
          <h2 className="section-heading">Related Products</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

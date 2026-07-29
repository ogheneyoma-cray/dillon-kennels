import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/format";

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
    return { title: "Product Not Found | Nudgenic" };
  }
  return {
    title: `${product.name} | Nudgenic`,
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
    .slice(0, 4);

  return (
    <div className="container-page py-10 lg:py-16">
      <nav className="mb-8 text-xs uppercase tracking-widest2 text-ink/50">
        <Link href="/" className="hover:text-rose">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-rose">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden bg-blush">
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
          <h1 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-rose">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink/80">
            {product.description}
          </p>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-8 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/70">
            <div className="flex justify-between">
              <dt>Availability</dt>
              <dd className={product.inStock ? "text-rose" : "text-ink/40"}>
                {product.inStock ? "In Stock" : "Sold Out"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd>3–7 business days across Nigeria</dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-ink/10 pt-14">
          <h2 className="section-heading text-center">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

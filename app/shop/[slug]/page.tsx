import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Piece not found" };

  return {
    title: product.name,
    // The full description is a long-form paragraph; trim it for the meta tag.
    description: `${product.description.slice(0, 155).trimEnd()}…`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  const details = [
    { label: "Fabric", value: product.fabric },
    { label: "Category", value: product.category },
    { label: "Sizes", value: product.sizes.join(" · ") },
    {
      label: "Availability",
      value: product.inStock ? "In stock, ships in 48 hours" : "Between dye lots",
    },
  ];

  return (
    <>
      <div className="shell pt-8">
        <nav aria-label="Breadcrumb" className="text-[12px] text-slate">
          <Link href="/" className="transition-colors hover:text-orchid">
            Home
          </Link>
          <span className="px-2 text-midnight/25">/</span>
          <Link href="/shop" className="transition-colors hover:text-orchid">
            Shop
          </Link>
          <span className="px-2 text-midnight/25">/</span>
          <span className="text-midnight/70">{product.name}</span>
        </nav>
      </div>

      <article className="shell grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
          {product.compareAt && (
            <span className="absolute left-4 top-4 rounded-full bg-orchid px-3 py-1.5 text-[11px] font-semibold text-linen">
              Reduced
            </span>
          )}
        </div>

        <div className="lg:pt-4">
          <p className="kicker">{product.category}</p>
          <h1 className="display-lg mt-3">{product.name}</h1>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 inline-block text-2xl font-semibold text-midnight"
            compareClassName="text-lg"
          />

          <p className="mt-6 text-[15px] leading-[1.85] text-midnight/75">
            {product.description}
          </p>

          <ProductDetailActions product={product} />

          <dl className="mt-10 divide-y divide-midnight/10 border-t border-midnight/10">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-6 py-3.5 text-sm">
                <dt className="w-32 shrink-0 text-slate">{detail.label}</dt>
                <dd className="text-midnight/85">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      {related.length > 0 && (
        <section className="shell pt-16 lg:pt-20">
          <h2 className="display-lg">More in {product.category}</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

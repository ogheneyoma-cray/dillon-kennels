import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import SectionHeading from "@/components/SectionHeading";

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
    // The stored description is long-form; trim it for the meta tag.
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
      value: product.inStock ? "In stock, ships in 48 hours" : "Between runs",
    },
  ];

  return (
    <>
      <div className="frame pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-wide2"
        >
          <Link href="/" className="text-ash transition-colors hover:text-camel">
            Home
          </Link>
          <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-camel" />
          <Link href="/shop" className="text-ash transition-colors hover:text-camel">
            Shop
          </Link>
          <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-camel" />
          <span className="text-camel">{product.name}</span>
        </nav>
      </div>

      <article className="frame grid gap-10 py-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[3/4] overflow-hidden bg-haze">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
          {!product.inStock && (
            <span className="absolute left-4 top-4 bg-onyx px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide2 text-paper">
              Sold out
            </span>
          )}
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="display-2 mt-3">{product.name}</h1>

          <div className="mt-4">
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 inline-block text-2xl font-semibold text-camel"
            compareClassName="text-lg"
          />

          <p className="mt-6 text-[15px] leading-[1.9] text-ash">
            {product.description}
          </p>

          <ProductDetailActions product={product} />

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-6 py-3.5 text-sm">
                <dt className="w-32 shrink-0 text-[11px] font-bold uppercase tracking-wide2 text-ash">
                  {detail.label}
                </dt>
                <dd className="text-onyx">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      {related.length > 0 && (
        <section className="frame pb-20">
          <SectionHeading title="You might also like" />
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

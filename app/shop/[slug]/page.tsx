import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductPrice from "@/components/ProductPrice";
import ProductCard from "@/components/ProductCard";
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
      <div className="boxed pt-8">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] font-bold uppercase tracking-bold3 text-mudd"
        >
          <Link href="/" className="transition-colors hover:text-tangerine">
            Home
          </Link>
          <span className="px-2 text-pine/25">/</span>
          <Link href="/shop" className="transition-colors hover:text-tangerine">
            Shop
          </Link>
          <span className="px-2 text-pine/25">/</span>
          <span className="text-pine">{product.name}</span>
        </nav>
      </div>

      <article className="boxed grid gap-10 py-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative border border-pine/10 p-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-shell">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
            {(product.compareAt || !product.inStock) && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[90px] w-[90px] overflow-hidden"
              >
                <span
                  className={`absolute -right-[38px] top-[20px] w-[140px] rotate-45 py-1.5 text-center text-[11px] font-bold uppercase tracking-bold3 text-canvas ${
                    product.inStock ? "bg-tangerine" : "bg-mudd"
                  }`}
                >
                  {product.inStock ? "Sale" : "Sold"}
                </span>
              </span>
            )}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-bold3 text-lagoon">
            {product.category}
          </p>
          <h1 className="head-xl mt-3 text-pine">{product.name}</h1>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 inline-block text-3xl font-extrabold text-pine"
            compareClassName="text-xl"
          />

          <p className="mt-6 text-[15px] leading-[1.85] text-mudd">
            {product.description}
          </p>

          <ProductDetailActions product={product} />

          <dl className="mt-10 divide-y divide-pine/10 border-y border-pine/10">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-6 py-3.5 text-sm">
                <dt className="w-32 shrink-0 text-[11px] font-bold uppercase tracking-bold3 text-mudd">
                  {detail.label}
                </dt>
                <dd className="text-pine">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      {related.length > 0 && (
        <section className="boxed pb-20">
          <SectionHeading title={`More ${product.category}`} />
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

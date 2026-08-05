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
    { label: "Cloth", value: product.cloth },
    { label: "Construction", value: product.cut },
    { label: "Category", value: product.category },
    { label: "Sizes", value: product.sizes.join(" · ") },
    {
      label: "Availability",
      value: product.inStock
        ? "In stock — leaves the workroom within 48 hours"
        : "Between runs",
    },
  ];

  return (
    <>
      <div className="border-b border-rule bg-pitch">
        <div className="wrap py-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-micro"
          >
            <Link href="/" className="text-slate transition-colors hover:text-brass">
              Home
            </Link>
            <span aria-hidden="true" className="h-px w-5 bg-rule" />
            <Link
              href="/shop"
              className="text-slate transition-colors hover:text-brass"
            >
              Collection
            </Link>
            <span aria-hidden="true" className="h-px w-5 bg-rule" />
            <span className="text-brass">{product.name}</span>
          </nav>
        </div>
      </div>

      <article className="ruled">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden border border-rule bg-panel">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover opacity-95"
            />
            {!product.inStock && (
              <span className="absolute left-0 top-0 bg-bone px-4 py-2 text-[10px] font-medium uppercase tracking-micro text-ink">
                Between runs
              </span>
            )}
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="display-2 mt-4">{product.name}</h1>

            <div className="mt-5">
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>

            <ProductPrice
              priceUsd={product.price}
              compareAtUsd={product.compareAt}
              className="mt-6 inline-block text-3xl font-light text-brass"
              compareClassName="text-xl"
            />

            <p className="mt-7 text-[15px] font-light leading-[1.95] text-smoke">
              {product.description}
            </p>

            <ProductDetailActions product={product} />

            <dl className="mt-12 divide-y divide-rule border-y border-rule">
              {details.map((detail) => (
                <div key={detail.label} className="flex gap-6 py-4 text-sm">
                  <dt className="w-36 shrink-0 text-[11px] uppercase tracking-micro text-slate">
                    {detail.label}
                  </dt>
                  <dd className="font-light text-bone">{detail.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[13px] font-light leading-relaxed text-slate">
              Not sure of your jacket size? The{" "}
              <Link
                href="/size-guide"
                className="text-brass underline underline-offset-4"
              >
                fit guide
              </Link>{" "}
              takes two measurements and one minute.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="ruled border-t border-rule">
          <div className="wrap py-20">
            <SectionHeading
              eyebrow="Same category"
              title="Cut alongside it"
            />
            <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

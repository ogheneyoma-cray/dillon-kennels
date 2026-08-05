import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import BookCover from "@/components/BookCover";
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
  if (!product) return { title: "Title not found" };

  return {
    title: `${product.name} — ${product.author}`,
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
    .slice(0, 5);

  const details = [
    { label: "Author", value: product.author },
    { label: "Genre", value: product.category },
    { label: "Pages", value: `${product.pages}` },
    { label: "Formats", value: product.formats.join(" · ") },
    { label: "Language", value: product.language },
    { label: "Published", value: product.published },
    { label: "ISBN", value: product.isbn },
    {
      label: "Availability",
      value: product.inStock
        ? "Available — download link issued at checkout"
        : "Between print runs",
    },
  ];

  return (
    <>
      <div className="border-b border-line bg-sand">
        <div className="wrap py-5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-wide2"
          >
            <Link href="/" className="text-muted transition-colors hover:text-clay">
              Home
            </Link>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <Link
              href="/shop"
              className="text-muted transition-colors hover:text-clay"
            >
              Shop
            </Link>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <span className="text-clay">{product.name}</span>
          </nav>
        </div>
      </div>

      <article className="wrap grid gap-12 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-16">
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-[280px] sm:w-[330px]">
            <span
              aria-hidden="true"
              className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-clay/10"
            />
            <BookCover
              src={product.image}
              alt={`${product.name} by ${product.author}`}
              priority
              className="relative w-full rounded-r-lg shadow-lift"
            />
            {product.compareAt && (
              <span className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-clay font-display text-[13px] font-bold uppercase text-paper">
                Sale
              </span>
            )}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="display-2 mt-3">{product.name}</h1>
          <p className="mt-2 text-[16px] text-muted">by {product.author}</p>

          <div className="mt-4">
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 inline-block text-3xl"
            compareClassName="text-lg"
          />

          <p className="mt-6 border-t border-line pt-6 text-[15px] leading-[1.95]">
            {product.description}
          </p>

          <div className="mt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-6 py-3.5 text-sm">
                <dt className="w-36 shrink-0 font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted">
                  {detail.label}
                </dt>
                <dd className="text-slate">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Unsure which format your reader takes? The{" "}
            <Link
              href="/reading-guide"
              className="text-clay underline underline-offset-4"
            >
              reading guide
            </Link>{" "}
            lists every common device and what to load onto it.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-blush py-16 lg:py-20">
          <div className="wrap">
            <SectionHeading eyebrow="You may also like" title="More in this genre" />
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
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

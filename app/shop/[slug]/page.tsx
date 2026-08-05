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
  if (!product) return { title: "Pair not found" };

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
    { label: "Upper", value: product.upper },
    { label: "Sole", value: product.sole },
    { label: "Heel height", value: product.heel },
    { label: "Category", value: product.category },
    { label: "Sizes (EU)", value: product.sizes.join(" · ") },
    {
      label: "Availability",
      value: product.inStock
        ? "In stock — dispatched within 48 hours"
        : "Between runs",
    },
  ];

  return (
    <>
      <div className="border-b border-line bg-mist">
        <div className="wrap py-5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-wide2"
          >
            <Link href="/" className="text-muted transition-colors hover:text-rose">
              Home
            </Link>
            <span aria-hidden="true" className="text-line-firm">
              /
            </span>
            <Link
              href="/shop"
              className="text-muted transition-colors hover:text-rose"
            >
              Shop
            </Link>
            <span aria-hidden="true" className="text-line-firm">
              /
            </span>
            <span className="text-rose">{product.name}</span>
          </nav>
        </div>
      </div>

      <article className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="relative aspect-square overflow-hidden border border-line bg-mist">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
          {!product.inStock && (
            <span className="absolute left-4 top-4 chip bg-graphite text-paper">
              Sold out
            </span>
          )}
          {product.compareAt && (
            <span className="absolute left-4 top-4 chip bg-rose text-paper">
              Reduced
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
            className="mt-5 inline-block text-3xl"
            compareClassName="text-lg"
          />

          <p className="mt-6 border-t border-line pt-6 text-[15px] leading-[1.9] text-body">
            {product.description}
          </p>

          <div className="mt-8">
            <ProductDetailActions product={product} />
          </div>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-6 py-3.5 text-sm">
                <dt className="w-36 shrink-0 font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted">
                  {detail.label}
                </dt>
                <dd className="text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Between sizes? The{" "}
            <Link
              href="/size-guide"
              className="text-rose underline underline-offset-4"
            >
              size guide
            </Link>{" "}
            converts EU, UK and US and tells you which way each last runs.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-mist py-16 lg:py-20">
          <div className="wrap">
            <SectionHeading script="You may also like" title="Same category" />
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
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

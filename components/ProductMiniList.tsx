import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Compact list column — diamond-bulleted heading, then thumbnail rows with
 * name, stars and price, as in the reference's three-column block.
 */
export default function ProductMiniList({
  title,
  products,
  href,
}: {
  title: string;
  products: Product[];
  href: string;
}) {
  if (products.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between border-b border-line pb-4">
        <h2 className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide2 text-onyx">
          <span aria-hidden="true" className="h-[6px] w-[6px] rotate-45 bg-camel" />
          {title}
        </h2>
        <Link
          href={href}
          className="text-[11px] font-bold uppercase tracking-wide2 text-mist transition-colors hover:text-camel"
        >
          View all
        </Link>
      </div>

      <ul className="mt-5 space-y-5">
        {products.map((product) => (
          <li key={product.id} className="flex items-start gap-4">
            <Link
              href={`/shop/${product.slug}`}
              className="relative h-[92px] w-[72px] shrink-0 overflow-hidden bg-haze"
            >
              <Image
                src={product.image}
                alt=""
                fill
                sizes="72px"
                className="object-cover"
              />
            </Link>
            <div className="min-w-0 pt-1">
              <h3>
                <Link
                  href={`/shop/${product.slug}`}
                  className="text-[12px] font-semibold uppercase tracking-wide2 text-onyx transition-colors hover:text-camel"
                >
                  {product.name}
                </Link>
              </h3>
              <StarRating rating={product.rating} className="mt-1.5" />
              <ProductPrice
                priceUsd={product.price}
                compareAtUsd={product.compareAt}
                className="mt-1.5 block text-sm font-semibold text-camel"
                compareClassName="text-[12px]"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

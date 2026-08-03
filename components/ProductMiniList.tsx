import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";

/**
 * Compact list panel — thumbnail beside name and price, with a "view more"
 * footer. Mirrors the three-column product lists in the reference layout.
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
    <section className="flex flex-col border border-pine/10 bg-white">
      <h2 className="head-sm border-b border-pine/10 px-6 py-5 text-pine">
        {title}
      </h2>

      <ul className="flex-1 divide-y divide-pine/5 px-6">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-4 py-4">
            <Link
              href={`/shop/${product.slug}`}
              className="relative h-[86px] w-[68px] shrink-0 overflow-hidden bg-shell"
            >
              <Image
                src={product.image}
                alt=""
                fill
                sizes="68px"
                className="object-cover"
              />
            </Link>
            <div className="min-w-0">
              <Link
                href={`/shop/${product.slug}`}
                className="font-display text-[13px] font-bold uppercase leading-snug tracking-wide text-pine transition-colors hover:text-tangerine"
              >
                {product.name}
              </Link>
              <ProductPrice
                priceUsd={product.price}
                compareAtUsd={product.compareAt}
                className="mt-1 block text-sm font-extrabold text-pine"
                compareClassName="text-xs"
              />
            </div>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="flex items-center justify-center gap-2 border-t border-pine/10 py-4 text-[11px] font-bold uppercase tracking-bold3 text-pine transition-colors hover:bg-pine hover:text-canvas"
      >
        View more
        <svg width="18" height="12" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <path
            d="M1 7h17m0 0-5.5-5.5M18 7l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}

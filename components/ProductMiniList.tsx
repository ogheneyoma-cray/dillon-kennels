import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/**
 * Compact list column — a ruled heading, then thumbnail rows carrying name,
 * rating and price. Used three-up beneath the main grid.
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
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <h2 className="text-[11px] font-medium uppercase tracking-micro text-brass">
          {title}
        </h2>
        <Link
          href={href}
          className="text-[11px] uppercase tracking-micro text-slate transition-colors hover:text-bone"
        >
          View all
        </Link>
      </div>

      <ul className="mt-6 space-y-6">
        {products.map((product) => (
          <li key={product.id} className="flex items-start gap-4">
            <Link
              href={`/shop/${product.slug}`}
              className="relative h-[100px] w-[78px] shrink-0 overflow-hidden border border-rule bg-panel"
            >
              <Image
                src={product.image}
                alt=""
                fill
                sizes="78px"
                className="object-cover opacity-90"
              />
            </Link>
            <div className="min-w-0 pt-0.5">
              <h3>
                <Link
                  href={`/shop/${product.slug}`}
                  className="text-sm font-light leading-snug text-bone transition-colors hover:text-brass"
                >
                  {product.name}
                </Link>
              </h3>
              <StarRating rating={product.rating} className="mt-2" />
              <ProductPrice
                priceUsd={product.price}
                compareAtUsd={product.compareAt}
                className="mt-2 block text-sm text-brass"
                compareClassName="text-[12px]"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

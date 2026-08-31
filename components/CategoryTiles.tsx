import Link from "next/link";
import Image from "next/image";
import { products, type Category } from "@/data/products";

const OVERLAYS: Record<Category, string> = {
  Shirts: "from-spruce-dark/90",
  "T-Shirts": "from-ink/90",
  Jackets: "from-mustard-dark/90",
  Sweaters: "from-spruce-dark/90",
  Footwear: "from-ink/90",
};

function representativeImage(category: Category): string | undefined {
  const inCategory = products.filter((p) => p.category === category);
  return (inCategory.find((p) => p.popular) ?? inCategory[0])?.image;
}

export default function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => {
        const image = representativeImage(category);
        const count = products.filter((p) => p.category === category).length;
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group relative flex aspect-[3/4] flex-col items-start justify-end overflow-hidden p-5 text-paper transition-transform hover:-translate-y-1"
          >
            {image && (
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${OVERLAYS[category]} via-transparent to-transparent`}
            />
            <span className="relative font-display text-2xl uppercase leading-tight">
              {category}
            </span>
            <span className="relative mt-1 text-xs font-semibold uppercase tracking-wide text-paper/80">
              {count} pieces
            </span>
          </Link>
        );
      })}
    </div>
  );
}

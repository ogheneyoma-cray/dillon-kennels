import Link from "next/link";
import { products, type Category } from "@/data/products";
import ProductCover from "@/components/ProductCover";

const OVERLAYS: Record<Category, string> = {
  "Cleansers": "from-clay-dark/90",
  "Serums & Treatments": "from-ink/90",
  "Moisturizers": "from-sage-dark/90",
  "Sun Care": "from-clay-dark/90",
  "Masks & Exfoliants": "from-sage-dark/90",
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
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group relative flex aspect-[3/4] items-end overflow-hidden rounded-lg bg-sand p-5 text-ivory transition-transform hover:-translate-y-1"
          >
            {image && (
              <ProductCover
                src={image}
                alt=""
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${OVERLAYS[category]} via-transparent to-transparent`}
            />
            <span className="relative font-display text-lg leading-tight">{category}</span>
          </Link>
        );
      })}
    </div>
  );
}

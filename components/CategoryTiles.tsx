import Link from "next/link";
import Image from "next/image";
import { products, type Category } from "@/data/products";

function representativeImage(category: Category): string | undefined {
  const inCategory = products.filter((p) => p.category === category);
  return (inCategory.find((p) => p.popular) ?? inCategory[0])?.image;
}

export default function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((category) => {
        const image = representativeImage(category);
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-full bg-linen p-4 text-center transition-transform hover:-translate-y-1"
          >
            {image && (
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="scale-125 rounded-full object-cover object-top origin-top transition-transform duration-500 ease-out group-hover:scale-[1.35]"
              />
            )}
            <span className="relative mb-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-tile">
              {category}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

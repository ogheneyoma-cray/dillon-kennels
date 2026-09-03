import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/data/products";

interface Tile {
  category: Category;
  headline: string;
  tag: string;
  image: string;
  tint: string;
}

const TILES: Tile[] = [
  {
    category: "Bathroom Accessories",
    headline: "Refresh the Bathroom Corner",
    tag: "Bath Edit",
    image: "/products/promo-bathroom.jpg",
    tint: "bg-sand",
  },
  {
    category: "Kitchen & Dining",
    headline: "Organized Kitchens Start Here",
    tag: "Kitchen Edit",
    image: "/products/promo-kitchen.jpg",
    tint: "bg-rust-pale",
  },
  {
    category: "Home Decor",
    headline: "Warm Up Every Room",
    tag: "Decor Edit",
    image: "/products/promo-decor.jpg",
    tint: "bg-navy/5",
  },
];

export default function PromoTiles() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {TILES.map((tile) => (
        <Link
          key={tile.category}
          href={`/shop?category=${encodeURIComponent(tile.category)}`}
          className={`group relative flex flex-col overflow-hidden ${tile.tint} p-6`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
            {tile.tag}
          </p>
          <h3 className="mt-2 max-w-[14ch] font-display text-xl font-medium leading-tight text-navy">
            {tile.headline}
          </h3>
          <span className="mt-4 text-sm font-bold text-navy underline decoration-rust decoration-2 underline-offset-4">
            Shop Now
          </span>
          <div className="relative mt-6 h-32 w-full overflow-hidden">
            <Image
              src={tile.image}
              alt=""
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

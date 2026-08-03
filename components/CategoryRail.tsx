import Image from "next/image";
import Link from "next/link";
import { byCategory, categories } from "@/data/products";

// One representative image per category, chosen by hand so the circles read
// clearly at small sizes.
const COVERS: Record<string, string> = {
  "Women's Sleepwear": "/xiradix/moonlight-satin-gown.jpg",
  "Men's Sleepwear": "/xiradix/powder-blue-sleep-set.jpg",
  "Robes & Kimonos": "/xiradix/scarlet-botanical-kimono.jpg",
  "Lounge Sets": "/xiradix/onyx-relaxed-lounge-set.jpg",
};

export default function CategoryRail() {
  return (
    <section className="shell pt-20 lg:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">Browse by</p>
          <h2 className="display-lg mt-3">Where would you like to start?</h2>
        </div>
        <Link href="/shop" className="link-rule">
          View all collections
        </Link>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/shop?category=${encodeURIComponent(category)}`} className="group block text-center">
              <span className="relative mx-auto block aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-mist">
                <Image
                  src={COVERS[category]}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 220px, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </span>
              <span className="mt-5 block text-[15px] font-medium text-midnight transition-colors group-hover:text-orchid">
                {category}
              </span>
              <span className="mt-1 block text-[13px] text-slate">
                {byCategory(category).length} pieces
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

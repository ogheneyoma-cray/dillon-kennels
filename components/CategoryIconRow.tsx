import Link from "next/link";
import { categories, type Category } from "@/data/products";

const ICONS: Record<Category, { path: string; color: string }> = {
  "Fiction & Fantasy": {
    path: "M4 5.5c3.4-1.6 6.6-1.6 9.5 0v13c-2.9-1.6-6.1-1.6-9.5 0v-13Z M20 5.5c-3.4-1.6-6.6-1.6-9.5 0v13c2.9-1.6 6.1-1.6 9.5 0v-13Z",
    color: "text-rose",
  },
  Romance: {
    path: "M12 20.5s-7.5-4.6-9.8-9.1C.7 7.9 2.6 4.5 6 4.5c2 0 3.6 1.1 6 3.6 2.4-2.5 4-3.6 6-3.6 3.4 0 5.3 3.4 3.8 6.9-2.3 4.5-9.8 9.1-9.8 9.1Z",
    color: "text-gold-dark",
  },
  "Mystery & Thriller": {
    path: "M11 4a7 7 0 1 0 4.9 12l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",
    color: "text-ink-soft",
  },
  "Business & Self-Development": {
    path: "M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm3 0V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2 M4 12h16",
    color: "text-moss",
  },
  "Children & Young Readers": {
    path: "M12 3l1.9 4.8 5.1.4-3.9 3.3 1.3 5-4.4-2.8-4.4 2.8 1.3-5-3.9-3.3 5.1-.4Z",
    color: "text-rose",
  },
};

export default function CategoryIconRow() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 rounded-none bg-blush px-6 py-10 sm:gap-x-14">
      {categories.map((category) => {
        const icon = ICONS[category];
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group flex w-24 flex-col items-center gap-3 text-center"
          >
            <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-paper shadow-tile transition-transform group-hover:-translate-y-1 ${icon.color}`}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={icon.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-xs font-semibold leading-tight text-ink">{category}</span>
          </Link>
        );
      })}
    </div>
  );
}

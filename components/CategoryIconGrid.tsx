import Link from "next/link";
import type { Category } from "@/data/products";

const ICON_PATHS: Record<Category, string> = {
  "Business & Management": "M4 8h14v11H4V8Z M8 8V5h6v3 M4 13h14",
  "Website Development": "M3 5h16v12H3V5Z M3 8.5h16 M6.5 6.7h.01 M9 6.7h.01",
  "Digital Marketing": "M3 11l14-6-4 14-3-6-6-2Z M13 9l-4 4",
  "Graphic Design & Visual Arts": "M11 3a8 8 0 1 0 0 16c1.1 0 1.6-.7 1.6-1.5 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H15a4 4 0 0 0 4-4c0-4.4-3.6-7-8-7Z M7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M14 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  "Data Science & Analytics": "M4 19V9 M10 19V5 M16 19v-7 M4 19h16",
  "Project Management": "M6 3h9l3 3v15H6V3Z M9 9h6 M9 13h6 M9 17h4",
};

const TONES: Record<Category, "magenta" | "lime"> = {
  "Business & Management": "magenta",
  "Website Development": "lime",
  "Digital Marketing": "magenta",
  "Graphic Design & Visual Arts": "lime",
  "Data Science & Analytics": "magenta",
  "Project Management": "lime",
};

export default function CategoryIconGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {categories.map((category) => {
        const tone = TONES[category];
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group rounded-2xl bg-paper p-6 shadow-tile transition-transform hover:-translate-y-1"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                tone === "magenta" ? "bg-magenta-pale text-magenta" : "bg-lime/15 text-lime-dark"
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={ICON_PATHS[category]} />
              </svg>
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-ink">{category}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta">
              Learn Course
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

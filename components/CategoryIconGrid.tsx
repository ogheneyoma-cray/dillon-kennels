import Link from "next/link";
import type { Category } from "@/data/products";

const ICON_PATHS: Record<Category, string> = {
  "Digital Marketing":
    "M3 11l14-6-4 14-3-6-6-2Z M13 9l-4 4",
  "SEO & Search": "M9 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z M12.5 12.5 18 18",
  "Social & Branding": "M7 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z M17 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z M3 19c0-3 2-5 5-5s5 2 5 5 M14 14.2c2.5.3 4 2.1 4 4.8",
  "Analytics & Advertising": "M4 19V9 M10 19V5 M16 19v-7 M4 19h16",
  "Content & Affiliate": "M8 12a4 4 0 0 1 4-4h2a4 4 0 1 1 0 8h-1 M12 12a4 4 0 0 1-4 4H6a4 4 0 1 1 0-8h1",
};

const TONES: Record<Category, "sage" | "indigo"> = {
  "Digital Marketing": "sage",
  "SEO & Search": "indigo",
  "Social & Branding": "sage",
  "Analytics & Advertising": "indigo",
  "Content & Affiliate": "sage",
};

export default function CategoryIconGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => {
        const tone = TONES[category];
        return (
          <Link
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group flex flex-col gap-4 rounded-2xl border border-line bg-paper p-5 transition-transform hover:-translate-y-1 hover:shadow-tile"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                tone === "sage" ? "bg-sage-pale text-sage-dark" : "bg-indigo-pale text-indigo"
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={ICON_PATHS[category]} />
              </svg>
            </span>
            <div>
              <p className="font-display text-base font-semibold text-ink">{category}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">Browse titles</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

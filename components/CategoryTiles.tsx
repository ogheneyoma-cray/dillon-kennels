import Link from "next/link";
import { products, type Category } from "@/data/products";

const ICONS: Record<Category, JSX.Element> = {
  "Business & Finance": (
    <path d="M3 20V10m6 10V4m6 16V8m6 12V13" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Design & Creative": (
    <path
      d="M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Marketing & Sales": (
    <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Data & Analytics": (
    <path
      d="M4 19h16M7 19V9m5 10V5m5 14v-7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Productivity & Tools": (
    <path
      d="M14.7 6.3a4 4 0 0 1-5.5 5.5L4 17v3h3l5.2-5.2a4 4 0 0 1 5.5-5.5l-2.3 2.3-2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Personal Growth": (
    <path d="M12 20V10m0 0L6 4m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function courseCount(category: Category): number {
  return products.filter((p) => p.category === category).length;
}

export default function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/shop?category=${encodeURIComponent(category)}`}
          className="group flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-paper p-5 shadow-tile transition-all hover:-translate-y-1 hover:border-indigo/40 hover:shadow-lift"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-pale text-indigo-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {ICONS[category]}
            </svg>
          </span>
          <div>
            <p className="font-display text-sm font-bold leading-tight text-ink">
              {category}
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              {courseCount(category)} courses
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

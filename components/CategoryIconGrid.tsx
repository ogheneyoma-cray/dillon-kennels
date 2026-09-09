import Link from "next/link";
import type { Category } from "@/data/products";
import { products } from "@/data/products";

/**
 * A file-tree style directory listing, not a card/icon grid — each category
 * renders as a row like a folder in a code editor's sidebar, with a file
 * count and a hover-reveal arrow. Deliberately unlike the icon-tile grids
 * used elsewhere in this project's other storefront branches.
 */
export default function CategoryIconGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-paper font-display text-sm">
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-2.5 text-xs text-ink-soft">
        <span className="window-dot bg-[#FF5F57]" />
        <span className="window-dot bg-[#FEBC2E]" />
        <span className="window-dot bg-[#28C840]" />
        <span className="ml-2">~/aims-i-tech/catalog</span>
      </div>
      <ul>
        {categories.map((category, i) => {
          const count = products.filter((p) => p.category === category).length;
          return (
            <li key={category} className={i > 0 ? "border-t border-line" : ""}>
              <Link
                href={`/shop?category=${encodeURIComponent(category)}`}
                className="group flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-term-pale sm:px-6"
              >
                <span className="flex items-center gap-3 text-ink">
                  <span className="text-term-dark">▸</span>
                  {category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/
                </span>
                <span className="flex items-center gap-3 text-xs text-ink-soft">
                  {count} {count === 1 ? "item" : "items"}
                  <span className="text-term-dark opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

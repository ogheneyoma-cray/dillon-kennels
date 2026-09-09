import Link from "next/link";
import type { Category } from "@/data/products";

const ICON_PATHS: Record<Category, string> = {
  "Website & App Development": "M3 5h16v12H3V5Z M3 8.5h16 M6.5 6.7h.01 M9 6.7h.01",
  Cybersecurity: "M11 2 4 5v6c0 5 3 8.5 7 9.5 4-1 7-4.5 7-9.5V5l-7-3Z M8.5 11l2 2 4-4",
  "Cloud & Infrastructure": "M6.5 17a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6-1.6A4.5 4.5 0 0 1 16 17H6.5Z",
  "IT Support & Helpdesk": "M4 15v-3a7 7 0 0 1 14 0v3 M4 15a2 2 0 0 0 2 2h1v-5H4v3Z M18 15a2 2 0 0 1-2 2h-1v-5h3v3Z M9 19h4",
  "Data & Backup Solutions": "M4 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z M4 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6 M4 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
};

const TONES: Record<Category, "signal" | "sunbeam"> = {
  "Website & App Development": "signal",
  Cybersecurity: "sunbeam",
  "Cloud & Infrastructure": "signal",
  "IT Support & Helpdesk": "sunbeam",
  "Data & Backup Solutions": "signal",
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
                tone === "signal" ? "bg-signal-pale text-signal" : "bg-sunbeam/15 text-sunbeam-dark"
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={ICON_PATHS[category]} />
              </svg>
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-ink">{category}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
              View Service
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

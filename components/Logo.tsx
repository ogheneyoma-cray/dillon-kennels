import { site } from "@/lib/site";

/**
 * Standalone mark: a rounded gold square with a black corner-frame glyph and
 * a center dot, reading as a viewfinder around a single item — a stand-in
 * for "browse the catalogue" that isn't tied to any one product category.
 * Reads clearly at favicon size and carries no location or contact detail.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="#F5B400" />
      <path
        d="M11 17v-6h6M23 11h6v6M29 23v6h-6M17 29h-6v-6"
        stroke="#181818"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="3.2" fill="#181818" />
    </svg>
  );
}

/**
 * Lockup: the mark beside the wordmark, with a small caps descriptor
 * beneath — matching the left-to-right lockup used in the reference header.
 */
export default function Logo({
  className = "",
  wordClassName = "text-2xl",
  markClassName = "h-9 w-9",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  /** "cream" when the logo sits on a dark band. */
  tone?: "ink" | "cream";
}) {
  const word = tone === "cream" ? "text-white" : "text-ink";
  const label = tone === "cream" ? "text-white/60" : "text-ink/45";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold leading-none tracking-tight ${word} ${wordClassName}`}>
          {site.wordmark}
        </span>
        <span className={`mt-1 font-body text-[9px] font-bold uppercase tracking-widest2 ${label}`}>
          Home &amp; Electronics
        </span>
      </span>
    </span>
  );
}

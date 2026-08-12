import { site } from "@/lib/site";

/**
 * Standalone mark: a rounded square in the violet-to-pink gradient the
 * reference reserves for its logo, with a angular "W" cut out of it in
 * negative space so the mark still reads at favicon size.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="wazuri-mark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#wazuri-mark)" />
      <path
        d="M9 14l3.4 12h2.4L17 17l2.2 9h2.4L25 14h-2.6l-2 9-2.2-9h-2.4l-2.2 9-2-9H9Z"
        fill="#FFFFFF"
      />
      <circle cx="30.5" cy="12.5" r="2.6" fill="#FFC93C" />
    </svg>
  );
}

/**
 * Lockup: the mark beside the wordmark, with a small caps descriptor
 * beneath — the same left-to-right lockup the reference uses in its header.
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
  /** "cream" when the logo sits on the dark footer/nav. */
  tone?: "ink" | "cream";
}) {
  const word = tone === "cream" ? "text-cream" : "text-ink";
  const label = tone === "cream" ? "text-cream/55" : "text-ink/50";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold leading-none tracking-tight ${word} ${wordClassName}`}>
          {site.wordmark}
        </span>
        <span className={`mt-1 font-display text-[9px] font-bold uppercase tracking-widest2 ${label}`}>
          Technologies
        </span>
      </span>
    </span>
  );
}

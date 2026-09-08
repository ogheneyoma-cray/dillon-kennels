import { site } from "@/lib/site";

/**
 * Standalone mark: a rounded navy square with a glowing teal chevron pair
 * (a nod to code brackets) and a single amber accent dot — matching the
 * icon language used across the Canva product illustrations. Carries no
 * location or contact detail, per brand guidance.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="#0B0F19" />
      <path
        d="M12 13l-5 7 5 7"
        stroke="#2FE0C4"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10l-4 20"
        stroke="#2FE0C4"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 13l5 7-5 7"
        stroke="#2FE0C4"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32.5" cy="9.5" r="2.4" fill="#FFB238" />
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
  const label = tone === "cream" ? "text-white/50" : "text-ink/45";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold leading-none tracking-tight ${word} ${wordClassName}`}>
          {site.wordmark}
        </span>
        <span className={`mt-1 font-body text-[9px] font-bold uppercase tracking-widest2 ${label}`}>
          Software &amp; Web
        </span>
      </span>
    </span>
  );
}

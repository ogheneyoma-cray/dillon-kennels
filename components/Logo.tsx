import { useId } from "react";
import { site } from "@/lib/site";

/**
 * Brand mark: a crescent moon with a sparkle set beside it. The moon is cut
 * out of a filled disc with a mask rather than a hand-tuned path so it stays
 * crisp at every size. The mask id is generated per render because the mark
 * appears more than once per page (header, footer, order confirmation).
 */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <mask id={maskId}>
        <rect width="40" height="40" fill="#fff" />
        <circle cx="27.5" cy="13.5" r="12" fill="#000" />
      </mask>
      <circle
        cx="19"
        cy="20"
        r="13"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
      <path
        d="M31 23.5c.62 3.35 1.28 4.01 4.63 4.63-3.35.62-4.01 1.28-4.63 4.62-.62-3.34-1.28-4-4.62-4.62 3.34-.62 4-1.28 4.62-4.63z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  markClassName = "h-7 w-7",
  wordClassName = "text-[1.6rem]",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-medium lowercase leading-none tracking-[0.06em] ${wordClassName}`}
      >
        {site.wordmark}
      </span>
    </span>
  );
}

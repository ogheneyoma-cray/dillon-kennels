import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const LINK_GROUPS = [
  ["/shop", "store"],
  ["/cart", "cart"],
  ["/checkout", "checkout"],
  ["/contact", "contact"],
  ["/shipping-policy", "delivery"],
  ["/refunds-policy", "refunds"],
  ["/privacy-policy", "privacy"],
  ["/terms-and-conditions", "terms"],
] as const;

function VisaMark() {
  return (
    <span className="flex h-7 w-11 items-center justify-center rounded-md bg-void-soft text-[11px] font-black italic tracking-tight text-paper">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-7 w-11 items-center justify-center rounded-md bg-void-soft"
      aria-label="Mastercard"
    >
      <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
        <circle cx="9" cy="8" r="8" fill="#EB001B" />
        <circle cx="17" cy="8" r="8" fill="#F79E1B" />
        <path d="M13 2.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6Z" fill="#FF5F00" />
      </svg>
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void text-paper">
      {/* CTA strip */}
      <div className="border-b border-paper/10">
        <div className="container-page flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xs uppercase tracking-widest2 text-term">
              $ ready when you are
            </p>
            <p className="mt-1 font-display text-xl font-bold sm:text-2xl">
              Ship your next build faster.
            </p>
          </div>
          <Link href="/shop" className="btn-primary">
            Browse the store →
          </Link>
        </div>
      </div>

      {/* Identity + inline link path */}
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Logo tone="paper" wordClassName="text-lg" />
          <nav aria-label="Footer" className="max-w-xl">
            <p className="flex flex-wrap gap-x-1 gap-y-2 font-display text-sm text-paper/70">
              {LINK_GROUPS.map(([href, label], i) => (
                <span key={href} className="flex items-center">
                  <Link href={href} className="hover:text-term">
                    /{label}
                  </Link>
                  {i < LINK_GROUPS.length - 1 && (
                    <span className="mx-2 text-paper/25">/</span>
                  )}
                </span>
              ))}
            </p>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-4 py-6 font-display text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span>© {year} {site.legalName}</span>
            <div className="flex items-center gap-1.5">
              <MastercardMark />
              <VisaMark />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
              {site.phone}
            </a>
            <span className="text-paper/40">{addressLines.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

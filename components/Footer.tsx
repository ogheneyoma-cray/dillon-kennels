import Link from "next/link";
import { site, addressLines } from "@/lib/site";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping-policy", label: "Shipping" },
  { href: "/refunds-policy", label: "Refunds" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-spruce-dark text-paper">
      <div className="container-page flex flex-col items-center gap-6 py-14 text-center">
        <p className="font-display text-4xl uppercase tracking-tight">{site.wordmark}</p>
        <p className="max-w-md text-sm leading-relaxed text-paper/70">{site.tagline}. Shirts, tees, jackets, sweaters and footwear, priced up front in USD or NGN.</p>

        <nav className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wide text-paper/80 transition-colors hover:text-mustard"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>{addressLines.join(", ")}</span>
            <a href={`mailto:${site.email}`} className="hover:text-mustard">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-mustard">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

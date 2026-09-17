import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

function VisaMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white" aria-label="Mastercard">
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
    <footer className="border-t border-line bg-ink text-linen">
      {/* Footer rendered as a two-column spec sheet: brand block + numbered link index */}
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo tone="white" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-linen/55">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <Link key={link.href} href={link.href} className="flex items-baseline gap-2 text-sm text-linen/70 transition-colors hover:text-clay">
              <span className="text-[10px] text-linen/40">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-linen/10">
        <div className="container-page flex flex-col items-center gap-3 py-6 text-xs text-linen/40 sm:flex-row sm:justify-between">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-linen">{site.email}</a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-linen">{site.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const PRODUCT_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

function VisaMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-lg bg-white text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-8 w-12 items-center justify-center rounded-lg bg-white"
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
    <footer className="bg-indigo text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="white" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <MastercardMark />
              <VisaMark />
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-gold">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-gold">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-gold">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Store",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/cart", label: "Cart" },
      { href: "/checkout", label: "Checkout" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact Us" },
      { href: "/shipping-policy", label: "Delivery Policy" },
      { href: "/refunds-policy", label: "Refunds Policy" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
    ],
  },
];

function VisaMark() {
  return (
    <span className="flex h-7 w-11 items-center justify-center rounded-md bg-sand text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-7 w-11 items-center justify-center rounded-md bg-sand"
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
    <footer className="bg-ink text-paper">
      {/* Brand strip */}
      <div className="border-b border-paper/10">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <div className="max-w-sm">
            <Logo tone="paper" wordClassName="text-xl" />
            <p className="mt-3 text-sm leading-relaxed text-paper/65">
              {site.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>
      </div>

      {/* Bordered link cards */}
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {COLUMNS.map((column) => (
            <div key={column.heading} className="rounded-xl border border-paper/15 p-5">
              <p className="text-xs font-bold uppercase tracking-widest2 text-peach">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
              {site.phone}
            </a>
            <span className="text-paper/50">{addressLines.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

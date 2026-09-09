import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { href: "/shop", label: "All Services" },
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
    <span className="flex h-7 w-11 items-center justify-center rounded-md bg-paper text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-7 w-11 items-center justify-center rounded-md bg-paper"
      aria-label="Mastercard"
    >
      <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
        <circle cx="9" cy="8" r="8" fill="#EB001B" />
        <circle cx="17" cy="8" r="8" fill="#F79E1B" />
        <path
          d="M13 2.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6Z"
          fill="#FF5F00"
        />
      </svg>
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dusk text-paper">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1px_1fr]">
          <div className="max-w-sm">
            <Logo tone="paper" wordClassName="text-xl" />
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <MastercardMark />
              <VisaMark />
            </div>
          </div>

          <div className="hidden bg-paper/10 lg:block" />

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-sunbeam">
                  {column.heading}
                </p>
                <ul className="mt-4 space-y-2">
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

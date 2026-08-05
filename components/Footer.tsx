import Link from "next/link";
import CurrencyConverter from "@/components/CurrencyConverter";
import Logo from "@/components/Logo";
import NewsletterBand from "@/components/NewsletterBand";
import { site } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop?category=Suits", label: "Suits" },
  { href: "/shop?category=Blazers", label: "Blazers" },
  { href: "/shop?category=Dinner+Jackets", label: "Dinner Jackets" },
  { href: "/shop?category=Waistcoats", label: "Waistcoats" },
  { href: "/shop?filter=sale", label: "Reduced" },
];

const HOUSE_LINKS = [
  { href: "/about", label: "The Atelier" },
  { href: "/size-guide", label: "Fit Guide" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping-policy", label: "Shipping & Delivery" },
  { href: "/refunds-policy", label: "Returns & Refunds" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const PAYMENTS = ["Visa", "Mastercard"];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-micro text-brass">
      {children}
    </p>
  );
}

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm font-light text-smoke transition-colors hover:text-bone"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-pitch">
      <NewsletterBand />

      <div className="ruled border-t border-rule">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr] lg:gap-10">
          <div>
            <Logo wordClassName="text-[1.3rem]" />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-smoke">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone transition-colors hover:text-brass"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="text-bone transition-colors hover:text-brass"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <ColumnHeading>Collection</ColumnHeading>
            <LinkList links={SHOP_LINKS} />
          </div>

          <div>
            <ColumnHeading>The House</ColumnHeading>
            <LinkList links={HOUSE_LINKS} />
          </div>

          <div>
            <CurrencyConverter />
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="wrap flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-light text-slate">
            © {year} <span className="text-bone">{site.name}</span>. All rights
            reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-micro text-slate transition-colors hover:text-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((method) => (
              <li
                key={method}
                className="border border-rule px-2.5 py-1 text-[10px] uppercase tracking-micro text-slate"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

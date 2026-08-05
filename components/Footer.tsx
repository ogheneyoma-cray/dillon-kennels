import Link from "next/link";
import CurrencyConverter from "@/components/CurrencyConverter";
import Logo from "@/components/Logo";
import NewsletterBand from "@/components/NewsletterBand";
import { site } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop?category=Men%27s+Formal", label: "Men's Formal" },
  { href: "/shop?category=Men%27s+Casual", label: "Men's Casual" },
  { href: "/shop?category=Women%27s+Heels", label: "Women's Heels" },
  { href: "/shop?category=Women%27s+Flats", label: "Women's Flats" },
  { href: "/shop?category=Sneakers", label: "Sneakers" },
];

const SUPPORT_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/shipping-policy", label: "Shipping & Delivery" },
  { href: "/refunds-policy", label: "Returns & Refunds" },
];

const INFO_LINKS = [
  { href: "/about", label: "Our Story" },
  { href: "/shop", label: "All Footwear" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const PAYMENTS = ["Visa", "Mastercard"];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[12px] font-bold uppercase tracking-wide2 text-paper">
      {children}
      <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
    </p>
  );
}

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-paper/65 transition-colors hover:text-rose"
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
    <footer>
      <NewsletterBand />

      <div className="bg-ink">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.7fr]">
          <div>
            <Logo tone="paper" wordClassName="text-[1.5rem]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper transition-colors hover:text-rose"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="text-paper transition-colors hover:text-rose"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <ColumnHeading>Shop</ColumnHeading>
            <LinkList links={SHOP_LINKS} />
          </div>

          <div>
            <ColumnHeading>Support</ColumnHeading>
            <LinkList links={SUPPORT_LINKS} />
          </div>

          <div>
            <ColumnHeading>Information</ColumnHeading>
            <LinkList links={INFO_LINKS} />
          </div>
        </div>

        <div className="wrap pb-16">
          <CurrencyConverter tone="paper" className="lg:max-w-lg" />
        </div>
      </div>

      <div className="border-t border-paper/10 bg-graphite">
        <div className="wrap flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-paper/60">
            © {year} <span className="text-paper">{site.name}</span>. All rights
            reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-paper/60 transition-colors hover:text-rose"
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
                className="chip border border-paper/25 text-paper/70"
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

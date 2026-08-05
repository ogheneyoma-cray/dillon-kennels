import Link from "next/link";
import CurrencyConverter from "@/components/CurrencyConverter";
import Logo from "@/components/Logo";
import NewsletterBand from "@/components/NewsletterBand";
import { site } from "@/lib/site";

const EXPLORE_LINKS = [
  { href: "/about", label: "About the Press" },
  { href: "/shop", label: "All Titles" },
  { href: "/reading-guide", label: "Reading Guide" },
  { href: "/contact", label: "Contact Us" },
];

const SERVICE_LINKS = [
  { href: "/shipping-policy", label: "Delivery & Downloads" },
  { href: "/refunds-policy", label: "Returns & Refunds" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const CATEGORY_LINKS = [
  { href: "/shop?category=Science+Fiction", label: "Science Fiction" },
  { href: "/shop?category=Fantasy", label: "Fantasy" },
  { href: "/shop?category=Romance", label: "Romance" },
  { href: "/shop?category=Mystery+%26+Thriller", label: "Mystery & Thriller" },
  { href: "/shop?category=Literary+Fiction", label: "Literary Fiction" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const PAYMENTS = ["Visa", "Mastercard"];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[18px] font-bold text-paper">
      {children}
      <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
    </h2>
  );
}

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-paper/65 transition-colors hover:text-clay"
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

      <div className="bg-slate">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="paper" wordClassName="text-[1.7rem]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper transition-colors hover:text-clay"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="text-paper transition-colors hover:text-clay"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <ColumnHeading>Explore Us</ColumnHeading>
            <LinkList links={EXPLORE_LINKS} />
          </div>

          <div>
            <ColumnHeading>Services</ColumnHeading>
            <LinkList links={SERVICE_LINKS} />
          </div>

          <div>
            <ColumnHeading>Categories</ColumnHeading>
            <LinkList links={CATEGORY_LINKS} />
          </div>
        </div>

        <div className="wrap pb-16">
          <CurrencyConverter tone="paper" className="lg:max-w-lg" />
        </div>
      </div>

      <div className="bg-slate-deep">
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
                  className="font-display text-[12px] font-semibold uppercase tracking-wide2 text-paper/60 transition-colors hover:text-clay"
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

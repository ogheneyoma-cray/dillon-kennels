import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const EXPLORE_LINKS = [
  { href: "/shop", label: "All Courses" },
  { href: "/about-us", label: "About Us" },
  { href: "/cart", label: "Cart" },
];

const SUPPORT_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Access Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dot-grid-surface bg-ink text-lavender">
      {/* CTA strip */}
      <div className="border-b border-lavender/10">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <p className="font-display text-2xl font-semibold leading-snug sm:max-w-sm">
            Have a topic you want us to cover next?
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-lavender px-7 py-3 text-sm font-semibold text-indigo transition-colors hover:bg-sage-pale"
          >
            Tell Us
          </Link>
        </div>
      </div>

      {/* Logo + link rail */}
      <div className="container-page flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs">
          <Logo tone="paper" wordClassName="text-xl" />
          <p className="mt-4 text-sm leading-relaxed text-lavender/70">
            {site.description}
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          <div>
            <p className="eyebrow text-sage">Explore</p>
            <ul className="mt-4 space-y-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/80 transition-colors hover:text-lavender"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sage">Support</p>
            <ul className="mt-4 space-y-2">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/80 transition-colors hover:text-lavender"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-lavender/10 pt-6 sm:border-t-0 sm:border-l sm:pl-16 sm:pt-0">
            <p className="eyebrow text-sage">Reach Us</p>
            <address className="mt-4 space-y-1.5 text-sm not-italic text-lavender/80">
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-lavender">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phoneHref}`} className="hover:text-lavender">
                  {site.phone}
                </a>
              </p>
              <p className="pt-1 text-lavender/60">{addressLines.join(", ")}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-lavender/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-lavender/50 sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center gap-5">
                <Link href={link.href} className="hover:text-lavender/80">
                  {link.label}
                </Link>
                {index < LEGAL_LINKS.length - 1 && <span className="text-lavender/20">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

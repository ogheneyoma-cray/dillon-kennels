import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const SERVICES = [
  {
    category: "Device & PC Support" as const,
    copy: "Slow laptops, virus removal, hardware diagnostics and data recovery.",
    from: "from-clay",
    to: "to-rose",
    path: "M6 6h12v10H6z M9 20h6",
  },
  {
    category: "Network & Wi-Fi" as const,
    copy: "Home and office Wi-Fi setup, dead-zone fixes and network installs.",
    from: "from-blue",
    to: "to-clay",
    path: "M12 20a1.4 1.4 0 1 0 0-2.8A1.4 1.4 0 0 0 12 20Zm-4.2-5a6 6 0 0 1 8.4 0M4.6 11.8a11 11 0 0 1 14.8 0",
  },
  {
    category: "Cybersecurity" as const,
    copy: "Security audits, ransomware protection and password/2FA setup.",
    from: "from-ink",
    to: "to-blue",
    path: "M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3Z",
  },
  {
    category: "Cloud & Backup" as const,
    copy: "Automated backups, Google Workspace and Microsoft 365 migrations.",
    from: "from-rose",
    to: "to-blue",
    path: "M7 18a4 4 0 0 1 .6-7.9 5.5 5.5 0 0 1 10.7-1.4A4.3 4.3 0 0 1 17.5 18H7Z",
  },
  {
    category: "Software & Setup" as const,
    copy: "OS installs, PC builds, licensing and business software onboarding.",
    from: "from-amber",
    to: "to-lime",
    path: "M8 8l-4 4 4 4m8-8 4 4-4 4M14 6l-4 12",
  },
];

const PROMISES = [
  {
    title: "Same-day help, most days",
    copy: "Most remote requests are picked up and resolved the day you book them — no ticket queue that runs for a week.",
  },
  {
    title: "Certified technicians",
    copy: "Every technician is vetted and trained across the five service lines we offer, not a single generalist wearing every hat.",
  },
  {
    title: "Ghana-wide coverage",
    copy: "Remote support reaches anywhere with a connection; on-site visits currently cover Accra and Kumasi.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <span aria-hidden="true" className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
        <span aria-hidden="true" className="absolute -bottom-24 right-[-4rem] h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
        <span
          aria-hidden="true"
          className="absolute right-[14%] top-16 hidden h-28 w-28 animate-spin rounded-full border-[10px] border-dashed border-amber/25 lg:block"
          style={{ animationDuration: "22s" }}
        />

        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest2 text-amber">
              Technology support, on your schedule
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
              IT problems fixed by <span className="highlight-bar text-cream">people who reply</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
              Wazuri Technologies handles the device, network, security, cloud
              and software support most small offices and busy households
              never quite get around to booking — remote or on-site, across
              Ghana.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse Services
              </Link>
              <Link href="/contact" className="btn-ghost text-cream hover:text-amber">
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] rounded-3xl border border-cream/10 bg-cream/[0.04] p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-clay to-rose">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-display text-sm font-bold text-cream">Security Audit</span>
                <span className="ml-auto rounded-full bg-lime/20 px-2.5 py-1 text-[10px] font-bold uppercase text-lime">Resolved</span>
              </div>
              <div className="mt-5 h-px bg-cream/10" />
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue to-clay">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="20" r="1.4" fill="#fff" />
                    <path d="M7.8 15a6 6 0 0 1 8.4 0M4.6 11.8a11 11 0 0 1 14.8 0" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-display text-sm font-bold text-cream">Wi-Fi Setup</span>
                <span className="ml-auto rounded-full bg-amber/20 px-2.5 py-1 text-[10px] font-bold uppercase text-amber">In Progress</span>
              </div>
              <div className="mt-5 h-px bg-cream/10" />
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber to-lime">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="5" width="16" height="11" rx="1.4" stroke="#14121F" strokeWidth="1.8" />
                    <path d="M9 20h6" stroke="#14121F" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-display text-sm font-bold text-cream">Laptop Tune-Up</span>
                <span className="ml-auto rounded-full bg-cream/15 px-2.5 py-1 text-[10px] font-bold uppercase text-cream/80">Queued</span>
              </div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest2 text-cream/40">
                Live request board, illustrative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section className="bg-paper">
        <div className="container-page grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
          {PROMISES.map((promise) => (
            <div key={promise.title}>
              <p className="font-display text-lg font-bold text-ink">{promise.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{promise.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid — gradient icon tiles */}
      <section className="border-t border-ink/10 bg-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">What We Cover</p>
            <h2 className="section-heading mt-3">Five service lines, one call</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((service) => {
              const count = products.filter((p) => p.category === service.category).length;
              return (
                <Link
                  key={service.category}
                  href={`/shop?category=${encodeURIComponent(service.category)}`}
                  className="group flex flex-col rounded-2xl bg-paper p-6 shadow-tile transition-transform hover:-translate-y-1"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.from} ${service.to}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={service.path} stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
                    {service.category}
                  </span>
                  <span className="mt-1.5 text-[13px] leading-relaxed text-ink/60">{service.copy}</span>
                  <span className="mt-3 text-[12px] font-bold uppercase tracking-wider text-rust">
                    {count} services →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured / popular services */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Most Booked</p>
            <h2 className="section-heading mt-3">Popular Services</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View All Services →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/shop" className="btn-secondary w-full">
            View All Services
          </Link>
        </div>
      </section>

      {/* Promo strip */}
      <section className="bg-ink text-cream">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-xl font-bold">{categories.length} Service Lines</p>
            <p className="mt-2 text-sm text-cream/70">
              Device, network, security, cloud and software — all under one team.
            </p>
          </div>
          <div>
            <p className="font-display text-xl font-bold">Remote & On-Site</p>
            <p className="mt-2 text-sm text-cream/70">
              Remote support nationwide; on-site visits across Accra and Kumasi.
            </p>
          </div>
          <div>
            <p className="font-display text-xl font-bold">Transparent Pricing</p>
            <p className="mt-2 text-sm text-cream/70">
              Every service is priced up front, in USD or GHS — no surprise call-out fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

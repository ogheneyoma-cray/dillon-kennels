import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Get in touch with the Webreid team — store address, phone, email, and business hours.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Have a question about an order, a course, or just want to say hello?
        Send us a message or reach out directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Store Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd className="mt-1">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-magenta">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-magenta">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Business Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink/80">
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd>9:00 AM – 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>10:00 AM – 4:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-blush p-6">
            <p className="text-sm text-ink-soft">
              Looking for quick answers instead?
            </p>
            <Link href="/faq" className="btn-ghost mt-2 inline-flex">
              Visit the FAQ page →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

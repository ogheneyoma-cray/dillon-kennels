import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Get in touch with the Wazuri Technologies team — office address, email, and business hours.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        A question about a service, a booking already made, or something you'd
        rather describe before committing to it — send a message or reach out
        directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="rounded-2xl border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl font-bold text-ink">Office Details</h2>
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
                  <a href={`mailto:${site.email}`} className="hover:text-rust">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl font-bold text-ink">Business Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink/80">
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd>8:00 AM – 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>9:00 AM – 3:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <section className="mt-20 border-t border-ink/10 pt-14 text-center">
        <h2 className="section-heading">Have a Quick Question?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          Check the FAQ before writing in — most booking, pricing and coverage
          questions are already answered there.
        </p>
        <Link href="/faq" className="btn-secondary mt-6 inline-flex">
          Visit the FAQ
        </Link>
      </section>
    </div>
  );
}

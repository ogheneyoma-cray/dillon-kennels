import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reading Guide",
  description:
    "Which Coquinate file format to load onto which device, how to sideload an EPUB, and what to do when a download will not open.",
};

const DEVICES = [
  { device: "Kindle (2022 or newer)", format: "EPUB", how: "Email to your Send-to-Kindle address" },
  { device: "Kindle (older models)", format: "MOBI", how: "USB transfer to the Documents folder" },
  { device: "Kobo", format: "EPUB", how: "USB transfer, or upload via Kobo Desktop" },
  { device: "Apple Books (iOS, macOS)", format: "EPUB", how: "Open the file and choose Books" },
  { device: "Google Play Books", format: "EPUB", how: "Upload at play.google.com/books" },
  { device: "Android (Moon+, Lithium)", format: "EPUB", how: "Open the file from Downloads" },
  { device: "Desktop (any)", format: "PDF", how: "Open in any reader — fixed layout" },
];

const STEPS = [
  {
    title: "Buy the book",
    copy: "Checkout issues a receipt with a download link for all three formats. There is no separate account to create.",
  },
  {
    title: "Pick your format",
    copy: "Use the table below. When in doubt take the EPUB — it reflows to your screen and every current reader accepts it.",
  },
  {
    title: "Move it across",
    copy: "Email, cable or cloud upload, depending on the device. The right-hand column says which one your reader wants.",
  },
  {
    title: "Keep the link",
    copy: "It never expires. Bookmark the receipt and you can pull the files down again on a new device years from now.",
  },
];

const TROUBLE = [
  {
    q: "The file downloads but nothing opens it",
    a: "Your device has no reader app associated with the format. Install one — Apple Books, Google Play Books, Kobo or Moon+ are all free — then open the file again from your Downloads folder.",
  },
  {
    q: "Kindle says the document is not supported",
    a: "You have an older Kindle and have sent it the EPUB. Send the MOBI instead; it is in the same download. Kindles sold from 2022 onwards take the EPUB directly.",
  },
  {
    q: "The text is tiny and will not reflow",
    a: "You are reading the PDF, which is fixed-layout by design. Switch to the EPUB, which reflows to whatever screen and type size you set.",
  },
  {
    q: "The download link has stopped working",
    a: `Links do not expire, so this is almost always a mail client rewriting the URL. Forward the receipt to ${site.email} and we will reissue it the same day.`,
  },
];

export default function ReadingGuidePage() {
  return (
    <>
      <PageHeader
        title="Reading Guide"
        crumb="Reading Guide"
        intro="Every title here ships as EPUB, MOBI and PDF. This page says which one your device wants and how to get it there."
      />

      <div className="wrap py-14 lg:py-20">
        <section>
          <h2 className="display-3">From checkout to reading</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {STEPS.map((step, index) => (
              <li key={step.title} className="card p-7 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-display text-[15px] font-bold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[17px] font-bold text-slate">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="display-3">Which format for which device</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-paper">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-sand">
                  {["Device", "Format", "How to get it there"].map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-6 py-4 text-left font-display text-[13px] font-semibold uppercase tracking-wide2 text-slate"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEVICES.map((row) => (
                  <tr
                    key={row.device}
                    className="border-b border-line last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-left font-normal text-slate"
                    >
                      {row.device}
                    </th>
                    <td className="px-6 py-4">
                      <span className="chip bg-sand text-clay">{row.format}</span>
                    </td>
                    <td className="px-6 py-4 text-body">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-muted">
            All three formats are included with every purchase. You never pay
            twice to read the same book on a second device.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="display-3">When something will not open</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {TROUBLE.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-display text-[17px] font-bold text-slate">
                  {item.q}
                </dt>
                <dd className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-body">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 rounded-3xl bg-sand p-8 lg:p-10">
          <h2 className="display-3">Still stuck?</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Tell us the device and the format you tried and we will walk you
            through it — or send the file in whatever shape your reader needs.
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-clay underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            or use the{" "}
            <Link
              href="/contact"
              className="text-clay underline underline-offset-4"
            >
              contact form
            </Link>
            .
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            If the book itself is faulty — missing chapters, broken contents,
            garbled text — the{" "}
            <Link
              href="/refunds-policy"
              className="text-clay underline underline-offset-4"
            >
              refunds policy
            </Link>{" "}
            covers a full refund, and we would want to know regardless.
          </p>
        </section>
      </div>
    </>
  );
}

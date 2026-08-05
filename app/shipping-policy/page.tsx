import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delivery & Downloads",
  description:
    "How Coquinate delivers ebooks — when the link arrives, what is in it, how re-downloads work and what to do if a file will not open.",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader
        title="Delivery & Downloads"
        crumb="Delivery"
        intro="Nothing here ships in a box. This page explains what happens between your order clearing and the book being on your reader. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <h2>How delivery works</h2>
          <p>
            Every title in this catalogue is a digital download. The moment an
            order clears, a receipt is generated with a download link covering
            all formats listed on the product page — usually EPUB, MOBI and PDF.
            There is no dispatch step, no courier and no delivery charge, in any
            country.
          </p>
          <p>
            The link is normally in your inbox within sixty seconds. If ten
            minutes pass with nothing, check the spam folder first: an
            automated receipt carrying a download URL is the single message most
            likely to be filtered.
          </p>

          <h2>What arrives</h2>
          <ul>
            <li>
              <strong>Every format, one price.</strong> Buying a title gives you
              all of its formats. We do not sell them separately and we do not
              charge to switch between them.
            </li>
            <li>
              <strong>No device lock.</strong> Files carry no DRM. You can move
              them between your own devices freely, and read them in whatever
              application you prefer.
            </li>
            <li>
              <strong>A hand-built EPUB.</strong> Real small caps, working
              footnotes and a navigable table of contents — not an exported word
              processor file.
            </li>
          </ul>

          <h2>Re-downloading</h2>
          <p>
            Download links do not expire. Lose a device, change laptop, or
            simply delete a file by accident and the original receipt will still
            work. If you no longer have the receipt, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> from the address
            you ordered with and we will reissue it the same working day. A
            re-download is never treated as a second purchase.
          </p>

          <h2>Prices in naira</h2>
          <p>
            Prices on this site are held in US dollars. If you are reading the
            site in naira, the figure you see is a conversion at the rate shown
            in the footer converter, and the amount settled at checkout will
            follow that same rate. Switching currency changes what is displayed,
            never what is owed in dollar terms.
          </p>

          <h2>Getting a file onto your reader</h2>
          <p>
            Which format your device wants, and how to move it across, is set
            out device by device in the{" "}
            <Link href="/reading-guide">reading guide</Link>. It covers Kindle
            (both generations), Kobo, Apple Books, Google Play Books and the
            common Android readers.
          </p>

          <h2>If a download fails</h2>
          <p>
            Tell us the title, the format and the device, and we will either
            walk you through it or send the file directly. Most reported
            failures turn out to be a mail client rewriting the link or a device
            with no reader application installed — both take a minute to fix.
          </p>

          <h2>If a file is faulty</h2>
          <p>
            Missing chapters, a broken table of contents, garbled characters or
            a corrupt file are production faults, not preferences. Report one
            and we will fix the file and reissue it to everyone who bought that
            title. If you would rather not wait, the{" "}
            <Link href="/refunds-policy">refunds policy</Link> gives you a full
            refund on a faulty book with no time limit.
          </p>

          <h2>Availability</h2>
          <p>
            Occasionally a title shows as between print runs — that means we
            have pulled it to correct something, not that we have run out.
            Digital stock cannot deplete. Titles in that state return within a
            quarter, and anyone who already bought one keeps their download.
          </p>
        </div>
      </div>
    </>
  );
}

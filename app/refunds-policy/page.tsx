import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "Coquinate's refunds policy for digital books — the fourteen-day window, faulty files, accidental purchases and how refunds are paid back.",
};

const STEPS = [
  {
    title: "Write to us",
    copy: "Email the order number and say what went wrong. You do not have to justify a change of mind, though it helps us if you do.",
  },
  {
    title: "We look at it",
    copy: "Faults are checked against the master file the same working day. If the book is broken, we fix it for everyone, not just you.",
  },
  {
    title: "Money goes back",
    copy: "Refunds are issued to the original payment method within five working days of the request being approved.",
  },
];

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        title="Returns & Refunds"
        crumb="Refunds"
        intro="A book you cannot read is a book you should not have paid for. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <h2>Why this policy looks different</h2>
          <p>
            Digital goods cannot be sent back. Once a file has been downloaded
            there is no way to un-supply it, so most sellers use that as grounds
            to refuse every refund outright. We do not. What follows is what we
            will actually do, and the small number of cases where we will say
            no.
          </p>

          <h2>Faulty files — always refunded</h2>
          <p>
            If a book is missing chapters, has a broken table of contents,
            renders as garbled characters, or simply will not open in a reader
            that should support it, you get a full refund on request. There is
            no time limit on this. Report it years later and the answer is the
            same.
          </p>
          <p>
            We would also rather fix it than refund it, so tell us what you saw
            even if you take the money — a production fault affects everyone who
            bought that title, and we reissue corrected files to all of them.
          </p>

          <h2>Change of mind — fourteen days</h2>
          <p>
            You have fourteen days from purchase to ask for a refund on a book
            you have decided against, provided you have not downloaded more than
            one format. If you have read it and did not enjoy it, that is a
            legitimate reason and we will not argue the point — but see the
            limits below.
          </p>

          <h2>Accidental purchases</h2>
          <p>
            Bought the same title twice, or bought one you already owned? Email
            us and we will refund the duplicate immediately, whatever the date.
            Our catalogue is small enough that we can see the duplicate in your
            record without your having to prove it.
          </p>

          <h2>How it works</h2>
          <ol className="not-prose my-6 grid gap-5 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="card p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-display text-[15px] font-bold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-slate">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <h2>Where we will say no</h2>
          <ul>
            <li>
              Repeated change-of-mind refunds on a pattern that reads as reading
              the catalogue for free. We will refund the current request and
              then ask you to buy elsewhere.
            </li>
            <li>
              Requests where the download link has been shared widely. The logs
              show link use, and a book distributed to a hundred people is not a
              refund case.
            </li>
            <li>
              Dissatisfaction with a book&rsquo;s content that is described
              accurately on its product page — a novel being sad, slow or
              ambiguous is not a fault when the page says so.
            </li>
          </ul>

          <h2>Refund method and timing</h2>
          <p>
            Refunds go to the method you paid with, within five working days of
            approval. Your bank may take a further few days to show it. We
            cannot refund to a different card or account than the one used.
          </p>

          <h2>What happens to your copy</h2>
          <p>
            When a refund is issued the title is removed from your library and
            the download link is retired. We ask that you delete the files you
            have already downloaded; we have no technical means of enforcing
            that and are relying on you.
          </p>

          <h2>Before you buy</h2>
          <p>
            Every product page carries a full description, the page count, the
            formats included and the publication date. If you want to know
            something that is not there — content warnings, whether a book is
            part of a series, how it ends — ask us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will tell
            you honestly, including when the honest answer costs us the sale.
            The <Link href="/reading-guide">reading guide</Link> covers format
            and device questions.
          </p>

          <h2>Your statutory rights</h2>
          <p>
            Nothing in this policy limits the rights you have under the Federal
            Competition and Consumer Protection Act. Where our policy is more
            generous, our policy applies.
          </p>
        </div>
      </div>
    </>
  );
}

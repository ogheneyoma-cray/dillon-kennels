import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Coquinate collects, uses, stores and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumb="Privacy"
        intro="What we collect, why we collect it, and what you can ask us to do with it. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <p>
            {site.name} is an independent publisher operating from{" "}
            {site.addressOneLine}. This policy explains how we handle personal
            information when you browse this site, buy a title, or write to us.
            We are the data controller for everything described below, and you
            can reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>What you give us.</strong> Your name, email address and
              billing city and country at checkout, plus anything you write in
              a contact form or an email. Because every title is a download,
              we never ask for a delivery address.
            </li>
            <li>
              <strong>What the order records.</strong> The titles bought, the
              price paid, the currency you were shown at the time, and the date
              the download link was issued.
            </li>
            <li>
              <strong>Download activity.</strong> We log when a download link is
              used and from roughly where, purely to spot a link being shared
              at a scale that indicates it has leaked.
            </li>
            <li>
              <strong>Manuscripts you send us.</strong> If you submit work, we
              hold the manuscript and your covering note for the length of the
              reading period and delete both afterwards unless we make an offer.
            </li>
            <li>
              <strong>What stays on your device.</strong> Your basket contents
              and your currency choice are written to your browser&rsquo;s local
              storage. They never reach our servers, and clearing your browser
              data removes them.
            </li>
          </ul>

          <h2>Why we hold it</h2>
          <h3>To complete an order</h3>
          <p>
            We cannot issue a download link without an email address, and we
            cannot produce a lawful receipt without a name and a billing
            country. This is processing necessary to perform our contract with
            you.
          </p>

          <h3>To keep your library available</h3>
          <p>
            Order records are what let you re-download a book years later
            without paying again. Keeping them is in your interest as much as
            ours, and rests on our legitimate interest in running a shop whose
            promises hold.
          </p>

          <h3>To meet our obligations</h3>
          <p>
            Sales and tax records are retained for the period Nigerian law
            requires, regardless of whether you later ask us to delete other
            information.
          </p>

          <h2>Who else sees it</h2>
          <p>
            Only the parties who need it to get a file to you: the payment
            processor when live payments are enabled, and the hosting, storage
            and email providers that run this site. Each is bound to use the
            data only for the service they provide us. We do not sell personal
            information, we do not rent mailing lists, and we do not share your
            reading history with anyone — including the authors, who see sales
            totals and never buyer identities.
          </p>

          <h2>How long we keep it</h2>
          <ul>
            <li>Order and download records: seven years, for tax and re-download.</li>
            <li>
              Contact correspondence: two years from the last message in the
              thread.
            </li>
            <li>
              Newsletter subscription: until you unsubscribe, which every email
              carries a link for.
            </li>
            <li>
              Unsuccessful manuscript submissions: deleted within ninety days of
              the reading period closing.
            </li>
          </ul>

          <h2>Your rights</h2>
          <p>
            Under the Nigeria Data Protection Act you may ask us for a copy of
            what we hold about you, ask us to correct anything wrong, ask us to
            delete it where no legal obligation requires us to keep it, object
            to processing based on legitimate interest, or ask us to send your
            data to another provider. Write to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond
            within thirty days. If you are not satisfied with our answer, you
            may complain to the Nigeria Data Protection Commission.
          </p>

          <h2>Security</h2>
          <p>
            The site is served over HTTPS. Access to order records is limited to
            the people who fulfil and support orders. No card details are stored
            on our systems at any point — this build takes no payment at all,
            and when payment goes live it will be handled entirely by the
            processor.
          </p>

          <h2>Children</h2>
          <p>
            This shop is intended for adults. We do not knowingly collect
            information from anyone under eighteen. If you believe a child has
            given us personal information, write to us and we will remove it.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes materially we will update the date at the top
            of the page and, where the change affects how we use information you
            have already given us, email anyone on our list.
          </p>
        </div>
      </div>
    </>
  );
}

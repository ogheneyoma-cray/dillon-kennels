import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Crewsita collects, uses, stores and protects your personal information.",
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
            {site.name} is a footwear shop operating from {site.addressOneLine}.
            This policy explains how we handle personal information when you
            browse this site, place an order, or write to us. We are the data
            controller for everything described below, and you can reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>What you give us.</strong> Your name, email address, phone
              number and delivery address at checkout, plus anything you write
              in a contact form or an email.
            </li>
            <li>
              <strong>What the order records.</strong> The pairs bought, the
              size and quantity, the currency you were shown at the time, and
              any delivery notes attached to the parcel.
            </li>
            <li>
              <strong>Foot measurements you choose to send us.</strong> If you
              email a foot length for sizing advice, we hold it only for as long
              as that conversation is open, unless you ask us to keep it on file
              so future orders can be checked against it.
            </li>
            <li>
              <strong>What your browser sends.</strong> Standard request data —
              IP address, browser and device type, the pages you opened and the
              times you opened them.
            </li>
            <li>
              <strong>What stays on your device.</strong> Your bag contents and
              your currency choice are written to your browser&rsquo;s local
              storage. They never reach our servers, and clearing your browser
              data removes them.
            </li>
          </ul>

          <h2>Why we hold it</h2>
          <h3>To complete an order</h3>
          <p>
            We cannot pack a box or hand it to a courier without a name, an
            address and a way to reach you if the driver cannot find the gate.
            This is processing necessary to perform our contract with you.
          </p>

          <h3>To answer you</h3>
          <p>
            If you write to us about sizing, a delayed parcel or a return, we
            keep the thread so the next person who picks it up is not starting
            from nothing. This rests on our legitimate interest in running a
            shop people can actually get hold of.
          </p>

          <h3>To meet our obligations</h3>
          <p>
            Sales and tax records are retained for the period Nigerian law
            requires, regardless of whether you later ask us to delete other
            information.
          </p>

          <h2>Who else sees it</h2>
          <p>
            Only the parties who need it to get a box to you: the courier
            handling your delivery, the payment processor when live payments are
            enabled, and the hosting and email providers that run this site.
            Each is bound to use the data only for the service they provide us.
            We do not sell personal information, we do not rent mailing lists,
            and we do not share your details with advertisers.
          </p>

          <h2>How long we keep it</h2>
          <ul>
            <li>Order records: seven years, for tax and accounting.</li>
            <li>
              Contact correspondence: two years from the last message in the
              thread.
            </li>
            <li>
              Newsletter subscription: until you unsubscribe, which every email
              carries a link for.
            </li>
            <li>
              Sizing notes held at your request: until you tell us to drop them.
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

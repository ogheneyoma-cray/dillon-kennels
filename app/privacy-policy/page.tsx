import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Xira Dix collects, uses, stores and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Privacy Policy"
        intro="What we collect, why we collect it, and what you can ask us to do with it. Last updated 1 August 2026."
      />

      <div className="shell py-14 lg:py-20">
        <div className="prose-legal max-w-3xl">
          <p>
            {site.name} is a sleepwear brand operating from Lagos, Nigeria. This
            policy explains how we handle personal information when you browse
            this site, place an order, or write to us. It applies to this
            website only. We are the data controller for the information
            described here, and you can reach us at any time at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-orchid underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>

          <h2>What we collect</h2>
          <p>
            We collect only what an order or an enquiry actually needs. In
            practice that falls into three groups.
          </p>
          <ul>
            <li>
              <strong>Information you give us.</strong> Your name, email
              address, phone number and delivery address when you check out, and
              whatever you choose to write in a contact form or an email.
            </li>
            <li>
              <strong>Information about your order.</strong> The items you
              bought, the size and quantity, the currency you were shown, and
              any delivery notes attached to the parcel.
            </li>
            <li>
              <strong>Information your browser sends.</strong> Standard request
              data such as approximate location, device type and the pages
              visited, which we read in aggregate to see what is working on the
              site.
            </li>
          </ul>
          <p>
            We do not collect card numbers, bank details or any payment
            credentials on this site, and no field anywhere on it asks for them.
          </p>

          <h2>What we store in your browser</h2>
          <p>
            Two things are saved on your own device rather than on our servers:
            the contents of your shopping bag, and whether you have chosen to
            see prices in US dollars or naira. Both stay on your device, both
            are readable only by this site, and clearing your browser storage
            removes them completely. Neither is used to track you across other
            websites.
          </p>

          <h2>Why we use it</h2>
          <p>
            To pack and deliver your order; to answer your messages; to send an
            order confirmation and, if you asked for it, the monthly Sleep
            Letter; to detect and prevent fraudulent orders; and to understand
            in aggregate which pieces and pages people are drawn to. We do not
            build advertising profiles, and we do not sell, rent or trade your
            personal information to anybody.
          </p>

          <h2>Who else sees it</h2>
          <p>
            Only the parties that need it to complete something you asked for.
            That means our delivery couriers, who receive your name, address and
            phone number so they can find you; our email provider, which sends
            order confirmations; and our hosting provider, which runs this site.
            Each is bound to use that information only for the service they
            provide to us. We will also disclose information where Nigerian law
            requires it of us.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Order records are kept for six years, which is the period Nigerian
            tax and accounting rules expect. Contact-form correspondence is kept
            for two years so we have context if you write again. Newsletter
            subscriptions are kept until you unsubscribe, which you can do from
            the link at the foot of every issue.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Nigeria Data Protection Act you can ask us to show you the
            personal information we hold about you, correct anything that is
            wrong, delete it where we have no continuing legal reason to keep
            it, or send you a copy in a portable format. You can also object to
            us using it for marketing at any time. Write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-orchid underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            and we will respond within 30 days. If you are not satisfied with
            how we handled a request, you can complain to the Nigeria Data
            Protection Commission.
          </p>

          <h2>Security</h2>
          <p>
            The site is served over HTTPS, access to order data is limited to
            the people who fulfil orders, and that access is reviewed regularly.
            No system is perfectly secure and we will not pretend otherwise —
            but we keep as little as we can for as short a time as we can, which
            is the most effective protection available to us.
          </p>

          <h2>Children</h2>
          <p>
            This store is intended for adults. We do not knowingly collect
            information from anyone under 18. If you believe a child has given
            us their information, write to us and we will remove it.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change how we handle personal information we will update this
            page and move the date at the top. Material changes will also be
            announced by email to anyone on the Sleep Letter.
          </p>
        </div>
      </div>
    </>
  );
}

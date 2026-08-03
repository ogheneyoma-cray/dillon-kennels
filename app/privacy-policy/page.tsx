import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Anikoda collects, uses, stores and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumb="Privacy"
        intro="What we collect, why we collect it, and what you can ask us to do with it. Last updated 1 August 2026."
      />

      <div className="boxed py-14">
        <div className="prose-legal max-w-3xl">
          <p>
            {site.name} is a children&apos;s clothing brand operating from
            Ilorin, Kwara State. This policy explains how we handle personal
            information when you browse this site, place an order, or write to
            us. We are the data controller for everything described here, and
            you can reach us at any time at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-tangerine underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>

          <h2>A note on children</h2>
          <p>
            We sell clothing for children, but this store is designed for the
            adults who buy it. Accounts and orders are for over-18s only, and we
            do not knowingly collect personal information from a child. We never
            ask for a child&apos;s name, date of birth, school or photograph —
            not at checkout, not in the size guide, and not in any marketing.
            The only child-related information we ever hold is an age range or a
            set of measurements, if you choose to send them to us when asking
            for sizing help, and that sits inside an ordinary support email
            rather than in any profile. If you believe a child has given us
            information, write to us and we will delete it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Information you give us.</strong> Your name, email
              address, phone number and delivery address at checkout, and
              whatever you write in a contact form or an email.
            </li>
            <li>
              <strong>Information about your order.</strong> The items bought,
              the size and quantity, the currency you were shown, and any
              delivery notes attached to the parcel.
            </li>
            <li>
              <strong>Information your browser sends.</strong> Standard request
              data such as approximate location, device type and pages visited,
              read in aggregate to see what is working on the site.
            </li>
          </ul>
          <p>
            We do not collect card numbers, bank details or any payment
            credentials on this site, and no field anywhere on it asks for them.
          </p>

          <h2>What we store in your browser</h2>
          <p>
            Two things sit on your own device rather than on our servers: the
            contents of your basket, and whether you have chosen to see prices
            in US dollars or naira. Both are readable only by this site, and
            clearing your browser storage removes them completely. Neither is
            used to track you across other websites.
          </p>

          <h2>Why we use it</h2>
          <p>
            To pack and deliver your order; to answer your messages; to send an
            order confirmation and, if you asked for it, our occasional
            newsletter; to detect and prevent fraudulent orders; and to
            understand in aggregate which pieces and pages people are drawn to.
            We do not build advertising profiles, and we do not sell, rent or
            trade your personal information to anybody.
          </p>

          <h2>Who else sees it</h2>
          <p>
            Only the parties that need it to complete something you asked for:
            our delivery couriers, who receive your name, address and phone
            number; our email provider, which sends order confirmations; and our
            hosting provider, which runs this site. Each is bound to use that
            information only for the service they provide to us. We will also
            disclose information where Nigerian law requires it.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Order records are kept for six years, the period Nigerian tax and
            accounting rules expect. Contact-form correspondence is kept for two
            years so we have context if you write again. Newsletter
            subscriptions are kept until you unsubscribe, which you can do from
            the link at the foot of every issue.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Nigeria Data Protection Act you can ask us to show you the
            personal information we hold about you, correct anything wrong,
            delete it where we have no continuing legal reason to keep it, or
            send you a copy in a portable format. You can object to us using it
            for marketing at any time. Write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-tangerine underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            and we will respond within 30 days. If you are unhappy with how we
            handled a request, you can complain to the Nigeria Data Protection
            Commission.
          </p>

          <h2>Security</h2>
          <p>
            The site is served over HTTPS, access to order data is limited to
            the people who fulfil orders, and that access is reviewed regularly.
            No system is perfectly secure and we will not pretend otherwise —
            but we keep as little as we can for as short a time as we can, which
            is the most effective protection available to us.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change how we handle personal information we will update this
            page and move the date at the top. Material changes will also be
            announced by email to anyone subscribed.
          </p>
        </div>
      </div>
    </>
  );
}

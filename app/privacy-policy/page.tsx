import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mydriad collects, uses, stores and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumb="Privacy"
        intro="What we collect, why we collect it, and what you can ask us to do with it. Last updated 1 August 2026."
      />

      <div className="ruled">
        <div className="wrap py-16">
          <div className="prose-legal">
            <p>
              {site.name} is a menswear house operating from {site.addressOneLine}.
              This policy explains how we handle personal information when you
              browse this site, place an order, or write to us. We are the data
              controller for everything described below, and you can reach us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>What you give us.</strong> Your name, email address,
                phone number and delivery address at checkout, plus anything you
                write in a contact form or an email.
              </li>
              <li>
                <strong>What the order records.</strong> The pieces bought, the
                size and quantity, the currency you were shown, and any delivery
                notes attached to the parcel.
              </li>
              <li>
                <strong>Measurements you choose to send us.</strong> If you
                email a chest, waist or sleeve figure for sizing advice, we hold
                it only for as long as that conversation is open unless you ask
                us to keep it on file for future orders.
              </li>
              <li>
                <strong>What your browser sends.</strong> Standard request data
                such as approximate location, device type and pages visited,
                read only in aggregate.
              </li>
            </ul>
            <p>
              We do not collect card numbers, bank details or any payment
              credential on this site, and no field anywhere on it asks for one.
            </p>

            <h2>What we store on your device</h2>
            <p>
              Two things sit in your own browser rather than on our servers: the
              contents of your bag, and whether you have chosen to see prices in
              US dollars or naira. Both are readable only by this site, and
              clearing your browser storage removes them completely. Neither is
              used to follow you anywhere else.
            </p>
            <p>
              We do not run behavioural advertising, retargeting pixels or
              cross-site profiling of any kind. That is why this site does not
              greet you with a consent wall listing dozens of partners — there
              are none to list.
            </p>

            <h2>Why we use it</h2>
            <p>
              To cut, press and deliver your order; to answer your messages and
              give sizing advice; to send an order confirmation and, if you
              asked for it, the monthly letter; to detect and prevent fraudulent
              orders; and to understand in aggregate which cuts and pages people
              are drawn to. We do not sell, rent or trade personal information
              to anyone, for any price.
            </p>

            <h2>Who else sees it</h2>
            <p>
              Only the parties needed to complete something you asked for: the
              courier, who receives your name, address and phone number; our
              email provider, which sends order confirmations; and our hosting
              provider, which serves this site. Each is bound to use that
              information only for the service they provide to us. We will also
              disclose information where Nigerian law requires it of us.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Order records are kept for six years, the period Nigerian tax and
              accounting rules expect. Contact correspondence is kept for two
              years so we have context if you write again. Newsletter
              subscriptions are kept until you unsubscribe, which you can do
              from the foot of every issue.
            </p>

            <h2>Your rights</h2>
            <p>
              Under the Nigeria Data Protection Act you can ask us to show you
              the personal information we hold about you, correct anything
              wrong, delete it where we have no continuing legal reason to keep
              it, or send you a copy in a portable format. You can object to
              marketing at any time. Write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and we will
              respond within 30 days. If you are unhappy with how a request was
              handled, you can complain to the Nigeria Data Protection
              Commission.
            </p>

            <h2>Security</h2>
            <p>
              The site is served over HTTPS, access to order data is limited to
              the people who fulfil orders, and that access is reviewed on a
              schedule. No system is perfectly secure and we will not pretend
              otherwise — but we hold as little as we can for as short a time as
              we can, which is the most effective protection available to us.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we change how we handle personal information we will update
              this page and move the date at the top. Material changes are also
              announced by email to anyone subscribed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

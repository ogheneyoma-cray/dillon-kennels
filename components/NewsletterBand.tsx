"use client";

import { useState } from "react";

/**
 * Newsletter band on the grey field, as it sits above the reference footer.
 * Demo only — there is no mailing-list backend on this build.
 */
export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-haze">
      <div className="frame py-16 text-center">
        <p className="eyebrow">Newsletter</p>
        <h2 className="display-2 mt-3">Get 15% off your first order</h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ash">
          New drops, restocks and the occasional discount code. One email a
          month, and you can leave whenever you like.
        </p>

        {done ? (
          <p
            role="status"
            aria-live="polite"
            className="mx-auto mt-8 max-w-lg border border-camel/40 bg-paper px-6 py-4 text-sm text-camel-dark"
          >
            You&apos;re on the list. Watch your inbox for the code.
          </p>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-xl flex-col sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email ..."
              className="min-h-[52px] flex-1 border border-line bg-paper px-5 text-sm text-onyx placeholder:text-mist focus:border-camel focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-[52px] bg-onyx px-9 text-[11px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-camel"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

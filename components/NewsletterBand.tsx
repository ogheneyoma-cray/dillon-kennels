"use client";

import { useState } from "react";

/**
 * Newsletter band above the footer columns. Demo only — there is no mailing
 * list backend on this build.
 */
export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="ruled">
      <div className="wrap grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
        <div>
          <p className="eyebrow">The list</p>
          <h2 className="display-3 mt-4">
            First look at every cut, before the run sells out
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-smoke">
            One letter a month: what is on the cutting table, what is coming
            back, and the occasional code. Leave whenever you like.
          </p>
        </div>

        {done ? (
          <p
            role="status"
            aria-live="polite"
            className="border-l border-brass bg-panel px-6 py-5 text-sm font-light text-bone"
          >
            You are on the list. The next letter goes out at the start of the
            month.
          </p>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setDone(true);
            }}
            className="flex flex-col sm:flex-row"
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
              placeholder="your@email.com"
              className="min-h-[56px] flex-1 border border-rule bg-panel px-5 text-sm font-light text-bone placeholder:text-slate focus:border-brass focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-[56px] bg-brass px-10 text-[11px] font-medium uppercase tracking-micro text-ink transition-colors hover:bg-brass-glow"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

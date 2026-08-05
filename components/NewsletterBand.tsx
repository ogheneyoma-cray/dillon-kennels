"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter strip that sits directly above the footer — the reference runs a
 * full-width rose band with the copy at the left and the form at the right.
 */
export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-rose">
      <div className="wrap grid items-center gap-6 py-12 lg:grid-cols-2 lg:py-14">
        <div>
          <p className="font-script text-[1.6rem] leading-none text-paper/80">
            Stay in step
          </p>
          <h2 className="mt-2 font-display text-[1.5rem] font-bold uppercase leading-tight tracking-wide2 text-paper sm:text-[1.9rem]">
            New pairs, early access
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-paper/80">
            One note a fortnight — restocks, new lasts and the reduced pairs
            before they reach the shop page. No more than that.
          </p>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="min-h-[52px] w-full bg-paper px-5 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-ink/30"
          />
          <button
            type="submit"
            className="min-h-[52px] shrink-0 bg-ink px-8 font-display text-[11px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-paper hover:text-rose"
          >
            Subscribe
          </button>
        </form>

        {done && (
          <p
            role="status"
            className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-paper lg:col-start-2"
          >
            Thank you — you are on the list.
          </p>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter strip above the footer — a clay band with the copy at the left
 * and a pill-shaped form at the right, as the reference draws it.
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
    <section className="relative isolate overflow-hidden bg-clay">
      <span
        aria-hidden="true"
        className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-paper/10"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-paper/10"
      />

      <div className="wrap relative grid items-center gap-8 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[1.7rem] font-bold leading-tight text-paper sm:text-[2.1rem]">
            One email a month. One new book.
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/80">
            What we published, what we are reading, and the first look at next
            month&rsquo;s title — usually with a code attached. Nothing else.
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
            className="min-h-[56px] w-full rounded-pill bg-paper px-6 text-sm text-slate placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-slate/20"
          />
          <button
            type="submit"
            className="min-h-[56px] shrink-0 rounded-pill bg-slate px-8 font-display text-[14px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-paper hover:text-clay"
          >
            Subscribe
          </button>
        </form>

        {done && (
          <p
            role="status"
            className="font-display text-[13px] font-semibold uppercase tracking-wide2 text-paper lg:col-start-2"
          >
            Thank you — you are on the list.
          </p>
        )}
      </div>
    </section>
  );
}

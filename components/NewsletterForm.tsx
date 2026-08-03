"use client";

import { useState } from "react";

/**
 * Demo newsletter capture, styled as the full-width subscribe bar from the
 * reference footer. There is no mailing-list backend on this build.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        role="status"
        aria-live="polite"
        className="border border-canvas/15 px-6 py-5 text-center text-sm text-sunshine"
      >
        You&apos;re signed up. We&apos;ll write when new sizes land.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
      className="flex flex-col overflow-hidden border border-canvas/15 sm:flex-row"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email address…"
        className="min-h-[58px] flex-1 bg-transparent px-6 text-sm text-canvas placeholder:text-canvas/40 focus:outline-none"
      />
      <button
        type="submit"
        className="flex min-h-[58px] items-center justify-center gap-2 bg-tangerine px-8 text-[12px] font-bold uppercase tracking-bold3 text-canvas transition-colors hover:bg-tangerine-dark"
      >
        Subscribe
        <svg width="18" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <path
            d="M1 7h17m0 0-5.5-5.5M18 7l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

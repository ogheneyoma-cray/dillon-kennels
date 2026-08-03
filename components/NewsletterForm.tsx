"use client";

import { useState } from "react";

/**
 * Demo newsletter capture. There is no mailing-list backend on this build, so
 * the submit handler validates locally and confirms in place.
 */
export default function NewsletterForm({
  className = "",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        className={`text-sm text-moon ${className}`}
        role="status"
        aria-live="polite"
      >
        You&apos;re on the list. Look out for the next Sleep Letter.
      </p>
    );
  }

  return (
    <form
      className={`relative ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
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
        placeholder="Enter your email"
        className="min-h-[50px] w-full rounded-full border border-linen/25 bg-transparent pl-5 pr-14 text-sm text-linen placeholder:text-linen/40 focus:border-moon focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute right-1.5 top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-linen text-midnight transition-colors hover:bg-moon"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

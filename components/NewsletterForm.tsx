"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  if (submitted) {
    return (
      <p className="font-display text-sm font-semibold text-term">
        ✓ subscribed — watch your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-md border border-paper/20 bg-void-soft p-1.5"
    >
      <span className="pl-2 font-display text-sm text-term">$</span>
      <input
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        className="min-h-[40px] w-full flex-1 bg-transparent font-display text-sm text-paper placeholder:text-paper/40 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex min-h-[40px] items-center justify-center rounded bg-term px-4 font-display text-xs font-bold text-void transition-colors hover:bg-term-dark"
      >
        subscribe
      </button>
    </form>
  );
}

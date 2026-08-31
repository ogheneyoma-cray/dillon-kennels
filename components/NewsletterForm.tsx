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
      <p className="text-sm font-semibold text-clay">
        You&apos;re on the list — watch your inbox for new arrivals.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        className="min-h-[48px] w-full flex-1 rounded-full border border-ink/20 bg-paper px-5 text-sm text-ink placeholder:text-ink-soft focus:border-clay focus:outline-none sm:min-w-[300px]"
      />
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-ivory transition-colors hover:bg-clay-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

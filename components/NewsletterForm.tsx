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
      <p className="text-sm font-semibold text-ink">
        You&apos;re on the list — watch your inbox for new releases.
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
        placeholder="Enter your email address"
        aria-label="Email address"
        className="min-h-[48px] w-full flex-1 border border-ink/20 bg-paper px-4 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none sm:min-w-[300px]"
      />
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-teal px-7 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

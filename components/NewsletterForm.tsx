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
      <p className="text-sm font-semibold text-gold">
        You&apos;re on the list — watch your inbox for updates.
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
        className="min-h-[48px] w-full flex-1 rounded-xl border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none sm:min-w-[300px]"
      />
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gold px-7 font-display text-sm font-semibold text-indigo transition-colors hover:bg-gold-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

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
      <p className="text-sm font-semibold text-fuchsia">
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
        className="min-h-[48px] w-full flex-1 rounded-full border border-paper/30 bg-transparent px-5 text-sm text-paper placeholder:text-paper/50 focus:border-paper focus:outline-none sm:min-w-[300px]"
      />
      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-fuchsia px-7 text-sm font-semibold text-paper transition-colors hover:bg-fuchsia-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

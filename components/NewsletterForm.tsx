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
      <p className="text-sm font-semibold text-sage-pale">
        You&apos;re on the list — watch your inbox for new titles.
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
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-paper px-7 text-sm font-semibold text-indigo transition-colors hover:bg-sage-pale"
      >
        Subscribe
      </button>
    </form>
  );
}

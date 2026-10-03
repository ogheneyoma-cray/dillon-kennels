"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary mt-6 w-full disabled:opacity-60">
      {pending ? "Signing In…" : "Sign In"}
    </button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, { error: null });
  return (
    <form action={action} className="mt-8 w-full max-w-sm rounded-2xl border border-line bg-paper p-6 text-left">
      <label htmlFor="password" className="label-text">
        Admin Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        className="input-field"
      />
      <SubmitButton />
      {state.error && (
        <p role="alert" className="mt-4 text-sm text-magenta">
          {state.error}
        </p>
      )}
    </form>
  );
}

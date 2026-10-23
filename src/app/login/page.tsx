"use client";

import { FormEvent, useState } from "react";
import { useProgress } from "@/components/ProgressProvider";
import { DEFAULT_ALLOWED_EMAIL } from "@/lib/auth/allowlist";
import { supabaseConfigured } from "@/lib/supabase/config";

export default function LoginPage() {
  const { signInWithMagicLink } = useProgress();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const configured = supabaseConfigured();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const { error } = await signInWithMagicLink(email.trim());
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }
    setStatus("sent");
    setMessage("Check your email for the magic link.");
  }

  return (
    <div className="mx-auto max-w-md pt-10">
      <h1
        className="font-display text-3xl font-800 tracking-tight text-ink"
        style={{ fontWeight: 800 }}
      >
        Sign in
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Magic link only. Curriculum and progress stay locked until you sign in
        as the allowed account ({DEFAULT_ALLOWED_EMAIL}).
      </p>

      {!configured && (
        <p className="mt-4 rounded-md border border-[var(--line)] bg-paper-deep/50 px-3 py-2 text-sm text-ink-soft">
          Supabase env vars are required. Add{" "}
          <code className="text-xs">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (see
          README).
        </p>
      )}

      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <label className="block text-sm font-medium text-ink-soft">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-[var(--line)] bg-paper px-3 py-2.5 text-ink focus:border-accent focus:outline-none"
            placeholder={DEFAULT_ALLOWED_EMAIL}
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending" || !configured}
          className="w-full rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-soft disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Email me a magic link"}
        </button>
        {message && (
          <p
            className={`text-sm ${status === "error" ? "text-warn" : "text-accent"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

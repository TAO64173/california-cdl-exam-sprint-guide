"use client";

import { useState } from "react";
import { getGtagClientId, track } from "@/lib/analytics";

// Entitlement-based access: email in → server checks active entitlement →
// short-lived signed URL out. The code is never a substitute for a real purchase.
export default function AccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setUrl("");

    try {
      const clientId = await getGtagClientId();
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, client_id: clientId }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (res.ok && data.url) {
        setUrl(data.url);
        setStatus("success");
      } else {
        setMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success" && url) {
    return (
      <div className="mx-auto w-full max-w-sm text-center">
        <p className="text-sm text-ink-muted">Your guide is ready.</p>
        <a
          href={url}
          onClick={() => track({ name: "download_started" })}
          className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-yellow px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
        >
          Download PDF
        </a>
        <p className="mt-3 text-xs text-ink-muted">This link expires in 30 minutes.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
      <label htmlFor="access-email" className="block text-sm font-medium text-ink">
        Enter your purchase email
      </label>
      <input
        id="access-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 w-full rounded-sm bg-yellow px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600 disabled:opacity-60"
      >
        {status === "loading" ? "Checking…" : "Access Guide"}
      </button>
      {status === "error" && message ? (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {message}
        </p>
      ) : null}
    </form>
  );
}

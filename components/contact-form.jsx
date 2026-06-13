"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send message.");
      }

      setForm(initialState);
      setStatus({ type: "success", message: payload.message });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send message.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="surface px-6 py-6">
      <div className="mb-6 space-y-2">
        <h2 className="text-xl font-semibold text-white">Get in touch</h2>
        <p className="text-sm leading-6 text-[var(--muted)]">
          Send a note directly from the portfolio. Configure SMTP variables in
          the environment before using this form in production.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-[var(--muted)]">
            <span>Name</span>
            <input
              required
              type="text"
              className="input text-white"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </label>

          <label className="space-y-2 text-sm text-[var(--muted)]">
            <span>Email</span>
            <input
              required
              type="email"
              className="input text-white"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-[var(--muted)]">
          <span>Message</span>
          <textarea
            required
            rows={6}
            className="input resize-y text-white"
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className={`
    inline-flex items-center gap-2 rounded-xl px-6 py-2.5
    text-sm font-medium text-white
    bg-[var(--brand)]
    transition-all duration-150
    hover:bg-violet-700 hover:shadow-[0_0_0_4px_rgba(109,40,217,0.18)]
    active:scale-[0.97] active:bg-violet-800
    focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(109,40,217,0.5)]
    disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100
  `}
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending...
              </>
            ) : (
              <>Send message</>
            )}
          </button>
          {status.message ? (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

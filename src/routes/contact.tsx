import { createFileRoute } from "@tanstack/react-router"
import { useState, type FormEvent } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

type FormState = "idle" | "submitting" | "success" | "error"

function ContactPage() {
  const [state, setState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData) {
    const next: Record<string, string> = {}
    const name = String(form.get("name") || "").trim()
    const email = String(form.get("email") || "").trim()
    const company = String(form.get("company") || "").trim()
    const message = String(form.get("message") || "").trim()

    if (!name) next.name = "Name is required"
    if (!email) next.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email"
    if (!company) next.company = "Company is required"
    if (!message) next.message = "Please describe what you need"
    else if (message.length < 20) next.message = "A bit more detail helps us respond accurately"

    return next
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setState("submitting")
    // Simulate network
    await new Promise((r) => setTimeout(r, 900))
    setState("success")
  }

  return (
    <div className="pb-20">
      <section className="page-wrap pt-12 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker mb-3">Contact</p>
            <h1 className="display text-4xl text-(--text) sm:text-5xl">
              Start a briefing.
            </h1>
            <p className="mt-5 text-base text-(--text-secondary)">
              Tell us about the role or capability gap. We respond within one business day with next steps.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div>
                <div className="kicker mb-1">Email</div>
                <a href="mailto:hello@forge.example" className="text-(--accent) no-underline hover:underline">
                  hello@forge.example
                </a>
              </div>
              <div>
                <div className="kicker mb-1">Response time</div>
                <div className="text-(--text-secondary)">Within 1 business day</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {state === "success" ? (
              <div className="rounded-xl border border-(--line) bg-(--bg-elevated) p-8 text-center">
                <CheckCircle2 size={40} className="mx-auto text-(--accent)" />
                <h2 className="mt-4 text-xl font-semibold">Briefing received</h2>
                <p className="mt-2 text-sm text-(--text-secondary)">
                  We’ll review the details and respond with a calibrated approach and timeline.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="mt-6 text-sm font-medium text-(--accent) hover:underline"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-xl border border-(--line) bg-(--bg-elevated) p-6 sm:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    error={errors.name}
                    placeholder="Alex Rivera"
                  />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder="alex@company.com"
                  />
                  <Field
                    label="Company"
                    name="company"
                    error={errors.company}
                    placeholder="Company name"
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-(--text)">
                      What do you need?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Role, timeline, must-have skills, location constraints…"
                      className="w-full rounded-md border border-(--line) bg-(--bg) px-3 py-2.5 text-sm text-(--text) outline-none transition-precise placeholder:text-(--text-muted) focus:border-(--accent)"
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-(--danger)">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xs text-(--text-muted)">
                    No spam. We’ll only use this to respond to your inquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white transition-precise hover:bg-(--accent-hover) disabled:opacity-60"
                  >
                    {state === "submitting" ? "Sending…" : "Send briefing"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  className = "",
}: {
  label: string
  name: string
  type?: string
  error?: string
  placeholder?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-(--text)">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-(--line) bg-(--bg) px-3 py-2.5 text-sm text-(--text) outline-none transition-precise placeholder:text-(--text-muted) focus:border-(--accent)"
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-(--danger)">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}

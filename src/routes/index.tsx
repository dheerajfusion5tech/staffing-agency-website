import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Activity } from "lucide-react"

export const Route = createFileRoute("/")({
  component: Homepage,
})

function Homepage() {
  return (
    <div className="pb-20">
      {/* Hero — asymmetric precision instrument */}
      <section className="page-wrap pt-12 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="kicker mb-4 rise-in">01 — Live Matching System</p>
            <h1 className="display text-4xl text-(--text) sm:text-5xl lg:text-6xl rise-in" style={{ animationDelay: "60ms" }}>
              Matching
              <br />
              at scale.
            </h1>
            <p className="mt-6 max-w-md text-base text-(--text-secondary) sm:text-lg rise-in" style={{ animationDelay: "120ms" }}>
              Forge connects employers with exact-fit talent through a precision-driven process. No generic pipelines. No soft promises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 rise-in" style={{ animationDelay: "180ms" }}>
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover)"
              >
                Request Talent
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 rounded-md border border-(--line-strong) bg-(--bg-elevated) px-5 py-2.5 text-sm font-semibold text-(--text) no-underline transition-precise hover:border-(--text-muted)"
              >
                Browse Open Roles
              </Link>
            </div>
          </div>

          {/* Matching Pulse Module */}
          <div className="lg:col-span-5 rise-in" style={{ animationDelay: "100ms" }}>
            <div className="rounded-lg border border-(--line) bg-(--bg-elevated) p-5 shadow-(--shadow-md)">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-(--accent)" />
                  <span className="kicker !text-(--accent)">Matching Pulse</span>
                </div>
                <span className="text-[11px] font-medium text-(--text-muted)">LIVE</span>
              </div>

              <div className="mb-5 h-px w-full overflow-hidden bg-(--line)">
                <div className="h-full w-1/3 bg-(--accent) pulse-line" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-(--text)">247</div>
                  <div className="mt-1 text-xs text-(--text-muted)">Open roles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-(--text)">38</div>
                  <div className="mt-1 text-xs text-(--text-muted)">Active matches</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-(--accent)">94%</div>
                  <div className="mt-1 text-xs text-(--text-muted)">Avg. match score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-(--text)">12d</div>
                  <div className="mt-1 text-xs text-(--text-muted)">Median time-to-fill</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-(--line) pt-4">
                <span className="rounded bg-(--accent-subtle) px-2 py-0.5 text-[11px] font-medium text-(--accent)">
                  Employers active
                </span>
                <span className="rounded bg-(--bg-muted) px-2 py-0.5 text-[11px] font-medium text-(--text-secondary)">
                  Candidates verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured roles band */}
      <section className="mt-16 border-y border-(--line) bg-(--bg-muted)/40">
        <div className="page-wrap py-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="kicker mb-1">02 — Featured Roles</p>
              <h2 className="text-lg font-semibold tracking-tight">Currently matching</h2>
            </div>
            <Link to="/jobs" className="text-sm font-medium text-(--accent) no-underline hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Senior React Engineer", loc: "Remote — US", score: 94, type: "Contract" },
              { title: "Staff Product Designer", loc: "New York, NY", score: 91, type: "Permanent" },
              { title: "DevOps / Platform", loc: "Austin / Remote", score: 88, type: "C2H" },
            ].map((role) => (
              <Link
                key={role.title}
                to="/jobs"
                className="group flex flex-col rounded-lg border border-(--line) bg-(--bg-elevated) p-4 no-underline transition-precise hover:border-(--line-accent)"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-(--text) group-hover:text-(--accent)">
                    {role.title}
                  </span>
                  <span className="shrink-0 rounded bg-(--accent-muted) px-1.5 py-0.5 text-[11px] font-semibold text-(--accent)">
                    {role.score}%
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs text-(--text-muted)">
                  <span>{role.loc}</span>
                  <span>·</span>
                  <span>{role.type}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service strips */}
      <section className="page-wrap mt-16">
        <p className="kicker mb-2">03 — Capabilities</p>
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          Built for precision hiring
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Exact-fit search",
              body: "We map role requirements to candidate capability with scoring that prioritizes signal over volume.",
            },
            {
              num: "02",
              title: "Rapid deployment",
              body: "Contract, temporary, and permanent placements with median time-to-fill measured in days, not weeks.",
            },
            {
              num: "03",
              title: "Employer control",
              body: "Transparent pipelines, clear match rationales, and direct access to vetted talent without noise.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-lg border border-(--line) bg-(--bg-elevated) p-5 transition-precise hover:border-(--line-strong)"
            >
              <span className="font-mono text-xs text-(--text-muted)">{item.num}</span>
              <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-(--text-secondary)">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="page-wrap mt-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-(--line) bg-(--bg-inverse) p-8 text-(--text-inverse) sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Ready for an exact match?
            </h2>
            <p className="mt-2 max-w-md text-sm opacity-80">
              Tell us what you need. We’ll return calibrated candidates, not a stack of résumés.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover)"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

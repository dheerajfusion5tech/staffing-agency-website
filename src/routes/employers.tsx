import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Check } from "lucide-react"

export const Route = createFileRoute("/employers")({
  component: EmployersPage,
})

function EmployersPage() {
  return (
    <div className="pb-20">
      <section className="page-wrap pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker mb-3">For Employers</p>
            <h1 className="display text-4xl text-(--text) sm:text-5xl">
              Hire with signal, not noise.
            </h1>
            <p className="mt-5 max-w-lg text-base text-(--text-secondary) sm:text-lg">
              Forge is built for teams that already know what good looks like. We deliver calibrated shortlists and clear rationales — not volume.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover)"
              >
                Request talent
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-(--line) bg-(--bg-elevated) p-6">
              <h2 className="text-sm font-semibold">What you get</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Role scorecard co-created with your team",
                  "Match scores with transparent criteria",
                  "Direct access to vetted candidates",
                  "Median time-to-fill of 12 days",
                  "Replacement coverage on permanent hires",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-(--text-secondary)">
                    <Check size={16} className="mt-0.5 shrink-0 text-(--accent)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap mt-16">
        <p className="kicker mb-2">Engagement models</p>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Choose the path that fits</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Project surge",
              body: "Need capacity for a defined window? We deploy contract and temporary talent with clear rates and exit ramps.",
            },
            {
              title: "Critical hire",
              body: "One role that must be exact. We run a focused search with deep evaluation and a short, high-signal list.",
            },
            {
              title: "Ongoing partnership",
              body: "Multiple concurrent needs. A dedicated desk that learns your standards and keeps a warm pipeline ready.",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-lg border border-(--line) bg-(--bg-elevated) p-5 transition-precise hover:border-(--line-strong)"
            >
              <h3 className="font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-(--text-secondary)">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap mt-16">
        <div className="rounded-xl border border-(--line) bg-(--bg-inverse) p-8 text-(--text-inverse)">
          <h2 className="text-xl font-bold tracking-tight">Ready to brief a role?</h2>
          <p className="mt-2 max-w-md text-sm opacity-80">
            Share the requirements. We’ll return a calibrated approach and initial timeline within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover)"
          >
            Start briefing
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

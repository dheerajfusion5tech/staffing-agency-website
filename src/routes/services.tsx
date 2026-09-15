import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export const Route = createFileRoute("/services")({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="pb-20">
      <section className="page-wrap pt-12 sm:pt-16">
        <p className="kicker mb-3">Services</p>
        <h1 className="display max-w-2xl text-4xl text-(--text) sm:text-5xl">
          Staffing built as a system.
        </h1>
        <p className="mt-5 max-w-xl text-base text-(--text-secondary) sm:text-lg">
          We operate with the discipline of a high-reliability process: clear intake, calibrated search, and transparent delivery.
        </p>
      </section>

      <section className="page-wrap mt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Contract & Temporary",
              body: "Rapid deployment of verified professionals for project peaks, coverage, and specialized short-term needs. Clear rates, clear duration, clear exit.",
              points: ["Same-week starts available", "Pre-vetted technical talent", "Flexible extension paths"],
            },
            {
              title: "Permanent Placement",
              body: "Direct-hire search focused on long-term fit. We prioritize capability signal and cultural alignment over keyword matching.",
              points: ["Structured scorecards", "Reference depth", "90-day replacement guarantee"],
            },
            {
              title: "Contract-to-Hire",
              body: "Try-before-you-commit pathways that reduce hiring risk while maintaining momentum. Ideal for evolving roles.",
              points: ["Conversion-friendly terms", "Performance checkpoints", "Seamless transition"],
            },
            {
              title: "Executive & Specialist Search",
              body: "Confidential, high-touch search for leadership and rare skill sets. Discrete process, rigorous evaluation.",
              points: ["Market mapping", "Confidential outreach", "Board-ready candidates"],
            },
          ].map((s, i) => (
            <article
              key={s.title}
              className="rounded-xl border border-(--line) bg-(--bg-elevated) p-6 transition-precise hover:border-(--line-strong)"
            >
              <span className="font-mono text-xs text-(--text-muted)">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-3 text-sm text-(--text-secondary)">{s.body}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-(--text)">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--accent)" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap mt-16">
        <div className="rounded-xl border border-(--line) bg-(--bg-muted)/50 p-8">
          <h2 className="text-lg font-semibold">How engagement works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-4">
            {["Intake & scorecard", "Calibrated search", "Shortlist + rationale", "Placement & follow-through"].map(
              (step, i) => (
                <div key={step}>
                  <div className="mb-2 font-mono text-xs text-(--accent)">0{i + 1}</div>
                  <div className="text-sm font-medium">{step}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="page-wrap mt-12 flex justify-end">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover)"
        >
          Discuss a role
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}

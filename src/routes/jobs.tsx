import { createFileRoute } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { jobs, categories, types, type Job } from "../data/jobs"
import { Search, MapPin, Clock } from "lucide-react"

export const Route = createFileRoute("/jobs")({
  component: JobsPage,
})

function JobsPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string>("All")
  const [type, setType] = useState<string>("All")

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const q = query.toLowerCase().trim()
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.location.toLowerCase().includes(q)
      const matchesCategory = category === "All" || job.category === category
      const matchesType = type === "All" || job.type === type
      return matchesQuery && matchesCategory && matchesType
    })
  }, [query, category, type])

  return (
    <div className="pb-20">
      <section className="page-wrap pt-12 sm:pt-16">
        <p className="kicker mb-3">Job Listings</p>
        <h1 className="display text-4xl text-(--text) sm:text-5xl">Open roles</h1>
        <p className="mt-4 max-w-lg text-base text-(--text-secondary)">
          Dense, scannable listings with match scores. Filter by capability, not just keywords.
        </p>
      </section>

      {/* Control panel filters */}
      <section className="page-wrap mt-8">
        <div className="rounded-lg border border-(--line) bg-(--bg-elevated) p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
              />
              <input
                type="search"
                placeholder="Search title, company, skill, location…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md border border-(--line) bg-(--bg) py-2.5 pl-10 pr-3 text-sm text-(--text) outline-none transition-precise placeholder:text-(--text-muted) focus:border-(--accent)"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-md border border-(--line) bg-(--bg) px-3 py-2.5 text-sm text-(--text) outline-none focus:border-(--accent)"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-md border border-(--line) bg-(--bg) px-3 py-2.5 text-sm text-(--text) outline-none focus:border-(--accent)"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 text-xs text-(--text-muted)">
            {filtered.length} role{filtered.length !== 1 ? "s" : ""} matching current filters
          </div>
        </div>
      </section>

      {/* Dense list */}
      <section className="page-wrap mt-6">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-(--line) bg-(--bg-elevated) px-6 py-16 text-center">
            <p className="text-sm font-medium text-(--text)">No roles match these filters</p>
            <p className="mt-1 text-sm text-(--text-muted)">Try clearing search or broadening category/type.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setCategory("All")
                setType("All")
              }}
              className="mt-4 text-sm font-medium text-(--accent) hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {filtered.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

function JobRow({ job }: { job: Job }) {
  return (
    <li className="group rounded-lg border border-(--line) bg-(--bg-elevated) transition-precise hover:border-(--line-accent)">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold text-(--text) group-hover:text-(--accent)">
              {job.title}
            </h2>
            <span className="rounded bg-(--accent-muted) px-1.5 py-0.5 text-[11px] font-semibold text-(--accent)">
              {job.matchScore}% match
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-(--text-muted)">
            <span className="font-medium text-(--text-secondary)">{job.company}</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {job.posted}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-(--text-secondary)">{job.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-(--bg-muted) px-2 py-0.5 text-[11px] font-medium text-(--text-secondary)"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2 sm:pl-4">
          <span className="text-sm font-semibold text-(--text)">{job.rate}</span>
          <span className="rounded border border-(--line) px-2 py-0.5 text-[11px] font-medium text-(--text-muted)">
            {job.type}
          </span>
        </div>
      </div>
    </li>
  )
}

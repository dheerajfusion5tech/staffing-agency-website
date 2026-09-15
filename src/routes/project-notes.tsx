import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/project-notes")({
  component: ProjectNotesPage,
})

function ProjectNotesPage() {
  return (
    <div className="pb-20">
      <section className="page-wrap-narrow pt-12 sm:pt-16">
        <p className="kicker mb-3">Documentation</p>
        <h1 className="display text-3xl text-(--text) sm:text-4xl">Project Notes</h1>
        <p className="mt-4 text-sm text-(--text-secondary)">
          Internal documentation for the Forge staffing agency frontend.
        </p>

        <article className="prose prose-sm mt-10 max-w-none dark:prose-invert">
          <h2>Project purpose</h2>
          <p>
            Forge is a modern staffing agency website that connects employers with temporary or
            permanent staff. It communicates reliability, professionalism, efficiency, trust, and
            modern recruitment technology without looking like a generic HR template.
          </p>

          <h2>Technology stack</h2>
          <ul>
            <li>TanStack Start (React + file-based routing + SSR-capable)</li>
            <li>React 19 + TypeScript</li>
            <li>Tailwind CSS v4</li>
            <li>TanStack React Query (available for data layer)</li>
            <li>Lucide icons</li>
            <li>Bun-compatible tooling</li>
          </ul>

          <h2>Architecture</h2>
          <ul>
            <li>Feature-oriented folders under <code>src/features</code> (ready for expansion)</li>
            <li>Thin route files in <code>src/routes</code></li>
            <li>Shared UI and layout components in <code>src/components</code></li>
            <li>Mock data isolated in <code>src/data</code></li>
            <li>Utilities in <code>src/lib</code></li>
            <li>Absolute-style imports via package imports map</li>
          </ul>

          <h2>Design system — Precision Matching Grid</h2>
          <p>
            Editorial + precision/manufacturing-inspired visual language. Strong typography,
            asymmetric modular layouts, deep charcoal / off-black with electric cobalt accent,
            documentary-style imagery approach, mechanical micro-interactions, dense usable
            job listings.
          </p>
          <ul>
            <li>Accent: Electric Cobalt (<code>#2563eb</code> / <code>#3b82f6</code> dark)</li>
            <li>Tokens defined as CSS variables in <code>src/styles.css</code></li>
            <li>Light and dark themes designed intentionally (not inverted)</li>
            <li>Theme toggle cycles light → dark → auto</li>
          </ul>

          <h2>Pages / Routes</h2>
          <ul>
            <li><code>/</code> — Homepage (Matching Pulse interface)</li>
            <li><code>/services</code> — Services</li>
            <li><code>/jobs</code> — Job Listings (client-side filter + search)</li>
            <li><code>/employers</code> — Employers</li>
            <li><code>/contact</code> — Contact / inquiry form with validation</li>
            <li><code>/project-notes</code> — This documentation</li>
          </ul>

          <h2>Job board behavior</h2>
          <p>
            Realistic mock dataset. Search matches title, company, tags, location. Category and
            type filters. Empty state with reset. Dense list layout (not decorative cards).
            Match scores displayed prominently.
          </p>

          <h2>Forms</h2>
          <p>
            Contact form has client-side validation, submitting and success states. No real backend;
            simulated network delay. Ready for API wiring later.
          </p>

          <h2>Development</h2>
          <pre><code>bun install
bun run dev          # http://localhost:3000
bun run build
bun run preview
bun run generate-routes
</code></pre>

          <h2>Deployment (Netlify)</h2>
          <p>
            Compatible with current TanStack Start + Vite output. Use the official Netlify
            adapter / Nitro preset when deploying, or static adapter if configured for SPA
            output. Verify build output and redirects for SPA/SSR as appropriate to the
            installed Start version.
          </p>

          <h2>Accessibility</h2>
          <ul>
            <li>Keyboard focus-visible styles</li>
            <li>Semantic headings and landmarks</li>
            <li>Form labels and error messaging</li>
            <li>ARIA labels on icon buttons</li>
          </ul>

          <h2>Limitations without backend</h2>
          <ul>
            <li>Job data is static mock data</li>
            <li>Contact form does not persist or send email</li>
            <li>No authentication or employer portal</li>
            <li>Match scores are illustrative</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

import { Link } from "@tanstack/react-router"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/jobs", label: "Jobs" },
  { to: "/employers", label: "Employers" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) backdrop-blur-md">
      <nav className="page-wrap flex h-14 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-(--text) no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded bg-(--accent) text-[11px] font-bold tracking-tight text-white">
            F
          </span>
          <span className="text-sm font-semibold tracking-tight">FORGE</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-[13px] font-medium text-(--text-secondary) no-underline transition-precise hover:bg-(--bg-muted) hover:text-(--text)"
              activeProps={{
                className:
                  "rounded-md px-3 py-1.5 text-[13px] font-medium text-(--text) no-underline bg-(--accent-muted)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/employers"
            className="hidden rounded-md bg-(--accent) px-3.5 py-1.5 text-[13px] font-semibold text-white no-underline transition-precise hover:bg-(--accent-hover) sm:inline-flex"
          >
            Request Talent
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--line) text-(--text-secondary) md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-(--line) bg-(--bg-elevated) md:hidden">
          <div className="page-wrap flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-(--text) no-underline hover:bg-(--bg-muted)"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/employers"
              className="mt-2 rounded-md bg-(--accent) px-3 py-2.5 text-center text-sm font-semibold text-white no-underline"
              onClick={() => setOpen(false)}
            >
              Request Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

import { Link } from "@tanstack/react-router"

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-(--line) bg-(--bg-elevated)">
      <div className="page-wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-(--accent) text-[10px] font-bold text-white">
              F
            </span>
            <span className="text-sm font-semibold tracking-tight">FORGE</span>
          </div>
          <p className="max-w-xs text-sm text-(--text-secondary)">
            Precision talent matching for employers who demand exact fits.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <span className="kicker">Navigate</span>
            <Link to="/" className="text-(--text-secondary) no-underline hover:text-(--text)">
              Home
            </Link>
            <Link to="/services" className="text-(--text-secondary) no-underline hover:text-(--text)">
              Services
            </Link>
            <Link to="/jobs" className="text-(--text-secondary) no-underline hover:text-(--text)">
              Jobs
            </Link>
            <Link to="/employers" className="text-(--text-secondary) no-underline hover:text-(--text)">
              Employers
            </Link>
            <Link to="/contact" className="text-(--text-secondary) no-underline hover:text-(--text)">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="kicker">Meta</span>
            <Link
              to="/project-notes"
              className="font-medium text-(--accent) no-underline hover:underline"
            >
              Project notes
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-(--line)">
        <div className="page-wrap flex items-center justify-between py-4 text-xs text-(--text-muted)">
          <span>© {new Date().getFullYear()} Forge Staffing</span>
          <span className="font-mono">Precision Matching Grid</span>
        </div>
      </div>
    </footer>
  )
}

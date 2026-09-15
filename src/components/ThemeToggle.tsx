import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("auto")
  const [resolved, setResolved] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "light" | "dark" | "auto") || "auto"
    setTheme(stored)
    applyTheme(stored)
  }, [])

  function applyTheme(mode: "light" | "dark" | "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const next = mode === "auto" ? (prefersDark ? "dark" : "light") : mode
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(next)
    if (mode === "auto") {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", mode)
    }
    root.style.colorScheme = next
    setResolved(next)
  }

  function cycle() {
    const order: Array<"light" | "dark" | "auto"> = ["light", "dark", "auto"]
    const idx = order.indexOf(theme)
    const next = order[(idx + 1) % order.length]
    setTheme(next)
    localStorage.setItem("theme", next)
    applyTheme(next)
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--line) bg-(--bg-elevated) text-(--text-secondary) transition-precise hover:border-(--line-strong) hover:text-(--text)"
      aria-label={`Theme: ${theme}. Click to cycle.`}
      title={`Theme: ${theme}`}
    >
      {resolved === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

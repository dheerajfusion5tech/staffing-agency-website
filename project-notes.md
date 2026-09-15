# Project Notes — Forge Staffing Agency Website

## Project purpose
Modern staffing agency website connecting employers with temporary or permanent staff. Communicates reliability, professionalism, efficiency, trust, human expertise, speed, and modern recruitment technology. Distinctive “Precision Matching Grid” visual language — not a generic recruitment template.

## Technology stack
- TanStack Start (React + file-based routing)
- React 19 + TypeScript
- Tailwind CSS v4
- TanStack React Query (available)
- Lucide React icons
- Bun-compatible package management

## Architecture
- Feature-oriented structure under `src/features` (ready for growth)
- Thin route files in `src/routes`
- Shared components in `src/components`
- Mock data in `src/data`
- Utilities in `src/lib`
- Design tokens via CSS variables in `src/styles.css`
- Package imports map for `#/*` paths

## Design system
**Name:** Precision Matching Grid  
**Accent:** Electric Cobalt (`#2563eb` light / `#3b82f6` dark)  
**Surfaces:** Off-white / deep charcoal  
**Typography:** Inter (system-friendly, high legibility) + mono for labels  
**Principles:** Editorial layouts, intentional asymmetry, dense usable job data, mechanical micro-interactions, strong hierarchy.

## Color / design tokens
All theme values live as CSS custom properties (`--bg`, `--text`, `--accent`, `--line`, etc.). Light and dark themes are designed deliberately. Use Tailwind v4 token syntax such as `bg-(--accent)`.

## Pages
1. `/` — Homepage (Matching Pulse)
2. `/services` — Services
3. `/jobs` — Job Listings (working filters/search)
4. `/employers` — Employers
5. `/contact` — Contact form with validation
6. `/project-notes` — This documentation (linked from footer as “Project notes”)

## Major components
- Header (desktop + mobile nav, theme toggle, CTA)
- Footer (nav + Project notes link)
- ThemeToggle (light / dark / auto)
- Job list + filter controls
- Contact form with validation & success state

## Animations
- Precise 120ms transitions
- Rise-in reveals
- Pulse line for Matching Pulse module
- Hover border/color shifts
- No cursor gimmicks or distracting motion

## Theme implementation
Script in root sets theme before paint. Toggle cycles modes and persists to localStorage. CSS variables switch via `.dark` / `[data-theme]`.

## Development commands
```bash
bun install
bun run dev
bun run build
bun run preview
bun run generate-routes
```

## Build / deployment
Standard Vite + TanStack Start build. For Netlify, use the current compatible adapter (Nitro or official Start Netlify integration for the installed version). Verify redirects and SSR/SPA mode after build.

## Important decisions
- Accent chosen as electric cobalt for precision/technical feel
- No About page (per requirements)
- Job board is dense list, not card grid
- Forms are fully client-validated with realistic states
- Mock data isolated for future API swap

## Limitations (no backend)
- Static job data
- Contact form does not send real messages
- No auth or employer dashboard

# Portfolio Redesign v2 — Design Spec

Date: 2026-07-15
Branch: `feature/portfolio-redesign-v2`
Owner: Satyam Shivam

## Goal
Transform the portfolio from a competent-but-generic "dark neon AI portfolio" into a
distinct, restrained, recruiter-focused site that reads as senior work — targeted at
top AI labs and international remote roles. Keep it fast, accessible, production-ready.

## What we keep (existing strengths)
- Metrics-rich, resume-aligned content (real numbers — the moat).
- Next.js 15 App Router + React 19 + TS + Tailwind + GSAP + Lenis stack.
- SEO basics: OG, JSON-LD Person, sitemap, robots.

## Identity — "Research Lab" (Warm ink)
Restraint of Anthropic / Linear / Vercel, made personal. Three pillars:
1. **Metrics as the hero** — real numbers become large typographic focal points ("results ledger").
2. **Light + dark mode** — warm paper vs. true dark (not pure black).
3. **Motion used surgically** — one reveal, fully reduced-motion safe.

### Design tokens
Light: paper `#FAFAF7`, surface `#FFFFFF`, ink `#17150F`, muted `#6B6862`, hairline `#E6E3DA`.
Dark: canvas `#0C0C0D`, surface `#161619`, ink `#F5F3EC`, muted `#9B978D`, hairline `#26262B`.
Accent (clay): `#D2683F`; on-light text `#B5501F`; on-dark `#E8895F`. One accent only.
Type: Fraunces (variable display serif) headings + hero metrics; Inter body; JetBrains Mono
metadata/labels. Self-hosted via `next/font` (removes render-blocking Google Fonts @import + CLS).
Radius 8px controls / 12px cards. 4px spacing base. Fluid type via `clamp()`.

## Information architecture (reordered — proof before story)
`Hero → Selected Work → Experience → About → Skills → Contact`
- Hero: positioning line + results ledger (3–4 real metrics) + CTA/resume + socials + availability. Mobile-visible.
- Selected Work: compact featured grid; top 3–4 projects get `/work/[slug]` case studies
  (Problem → Approach → Architecture → Results + metrics + links + per-project JSON-LD).
- Experience: timeline, cleaner, shown on mobile.
- About: concise story + education + research.
- Skills: de-cluttered, grouped, honest — drop the random-position "constellation".
- Contact + footer.

## Motion
One reveal (fade + 8px rise, ~400ms, 60ms stagger). Remove: 3D tilt, floating hero block,
scanlines, ping dots, neural canvas (→ subtle static dot-grid working in both modes).
Fully `prefers-reduced-motion` safe; content renders without JS.

## Accessibility
WCAG AA contrast (fix `#888`-on-black fails), `:focus-visible` rings, skip link, semantic
landmarks, keyboard nav, ARIA labels, all content visible at every breakpoint.

## Performance / SEO
`next/font` self-host, `next/image` for project images, remove neural canvas, per-project
JSON-LD on `/work` routes. Honest LH target ≥95 verified post-deploy (PageSpeed on Vercel URL).
Repo cleanup: delete committed cruft (`index.html`, `dist/`, `build_out.txt`, `lint_*.txt`,
`lint_report.json`, `tsc_report.txt`).

## Content
Rewrite hero/about/CTAs; restructure project copy into Problem/Approach/Results. Every metric
stays truthful — all numbers sourced from existing resume-aligned content. Invent nothing.

## Build order (small, reviewable commits)
1. Tokens + theme system (light/dark, fonts, ThemeToggle)
2. Hero + results ledger
3. Selected Work grid + `/work/[slug]` case studies
4. Experience
5. About + Skills
6. Contact/footer
7. A11y + perf + cleanup pass
8. Visual QA in-browser + before/after review

## Tooling
Skills: ui-ux-pro-max (design-system, ui-styling), frontend-design, impeccable, dataviz.
MCPs: Context7 (library docs), Firecrawl (repo/design research), in-app Browser (visual QA).
GitHub MCP optional (public repos readable via Firecrawl). No Figma designs to import.

## Out of scope (this pass)
Pruning the unused shadcn/Radix component surface (large, low-risk-to-leave); backend contact
form; blog. Noted for a follow-up.

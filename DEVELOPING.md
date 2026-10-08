# Martruther Logistics — Development Guide

## Tech stack

- **Framework:** React Router 8 in framework mode, configured with `ssr: false`
- **Rendering:** client-side SPA. The build produces static files; there is no
  server runtime.
- **UI:** React 19, Tailwind CSS 4 (`@tailwindcss/vite`), `@tabler/icons-react`
- **Language:** TypeScript
- **Formatting:** `oxfmt`

## Commands

- **Dev:** `pnpm dev`
- **Build:** `pnpm build` → static output in `build/client/`
- **Preview:** `pnpm start`
- **Typecheck:** `pnpm typecheck` (runs `react-router typegen` first, so route
  types are always regenerated before `tsc`)
- **Test:** `pnpm test`
- **Format:** `pnpm format`

## Directory structure

```
app/                   # React frontend
  root.tsx             # HTML shell, providers, error boundary
  entry.client.tsx     # Browser entry point
  routes.ts            # Route config — flatRoutes()
  routes/              # File-based page routes (auto-discovered)
    _index.tsx         # / (the marketing page body)
    terms.tsx          # /terms   — placeholder legal copy
    privacy.tsx        # /privacy — placeholder legal copy
    cookies.tsx        # /cookies — placeholder legal copy
  components/
    layout/
      Layout.tsx       # Shell shared by every route: header + main + footer
      SiteHeader.tsx   # Floating header and mobile menu drawer
      SiteFooter.tsx   # Detailed footer: links, working days, contact, legal
  lib/                 # Config values and small helpers
    app-config.ts      # Document title
    site.ts            # Business details, nav targets, opening hours
  global.css           # Stylesheet entry point (Tailwind + styles/*)
  styles/              # Per-section stylesheets, one per area of the page
    tokens.css         #   Tailwind colour mapping for the three page channels
    base.css           #   document defaults, scrollbar, reduced-motion
    shared.css         #   primitives used by more than one section
    layout.css         #   page shell, container, and the brand palette
    page.css           #   floating header shell, skip link, legal-page prose
    header.css         #   header internals: brand, nav, mobile drawer
    hero.css           #   hero and dispatch board
    trust.css          #   highlights strip
    services.css       #   truck capability cards
    about.css          #   story, people, values
    fleet.css          #   fleet cards + truck photo panels
    contact.css        #   contact details and quote form
    footer.css         #   site footer

public/                # Favicons, app icons, web manifest, fleet photos
react-router.config.ts # React Router framework config
vite.config.ts         # Tailwind + React Router plugins, and the @/ alias
```

## Architecture notes

### There is no backend

This is a static site by design. Do not reintroduce a server, database, or API
route without an explicit reason — the quote form is intentionally client-only,
composing `mailto:` and `wa.me` links in `app/routes/_index.tsx`.

### Routing

`app/routes.ts` uses `flatRoutes()` from `@react-router/fs-routes`, so any file
added under `app/routes/` becomes a route automatically. A route component can
export `meta()` for the document title and description.

`Layout` renders the header and footer, so both appear on every route. Section
links in the header and footer therefore resolve back to the home page —
`SiteHeader` returns `#services` on `/` and `/#services` elsewhere, because a
bare hash on `/terms` would look for an anchor that does not exist in that
document.

The legal pages (`/terms`, `/privacy`, `/cookies`) ship with **marked
placeholder copy**. Replace it with text reviewed for the business before
launch; it is illustrative, not legal advice.

### Scrolling

`components/layout/Layout.tsx` deliberately does **not** create an inner scroll
container. Scrolling happens on the document so that `scroll-behavior: smooth`
and the in-page anchor links (`#services`, `#fleet`, `#about`, `#contact`)
behave normally. Keep it that way.

If you add a route and deploy to Netlify, the catch-all redirect in
`netlify.toml` already serves `index.html` for unknown paths.

### Styling

Styles are split per section under `app/styles/`, with `app/global.css` acting
as the entry point that imports Tailwind and then each partial **in cascade
order**. Put a rule in the file for the section it belongs to; use `shared.css`
only when a primitive genuinely spans sections (kicker, headings, buttons, the
generic section shell, the dark band treatment).

Ordering matters and is the reason the imports are ordered:
`tokens` → `base` → `shared` → `layout` → then the sections in page order →
`footer`. A section's own rules must load _after_ `shared.css` so they win.

Each section file also carries its own `@media` overrides at the bottom, placed
after that section's base rules.

Everything sits in the `.ml-*` class namespace, with the brand palette defined
as custom properties on `.ml-site` (`--ml-navy`, `--ml-ink`, `--ml-amber`,
`--ml-line`, and friends). Tailwind is available for utility use and for the
`@apply` rules in the base layer.

The site is **light-only**. There is no dark-mode toggle, so keep the palette
fixed rather than adding a `.dark` block.

The `:root` block in `styles/tokens.css` holds only the three tokens still in
use (`--background`, `--foreground`, `--muted-foreground`). The full brand
palette is on `.ml-site` in `styles/layout.css`.

### Configuration is code

Do not add `process.env` reads to configure app behavior or feature flags.
There are currently no environment variables of any kind. Brand-level values
(company name, phone numbers, email, logo URL) are constants at the top of
`app/routes/_index.tsx`; shared document-level values live in
`app/lib/app-config.ts`.

## Adding a dependency

Keep the dependency list lean. Prefer browser APIs over packages, and be
willing to drop something rather than add a framework for a single component.

```bash
pnpm add <package>
```

## Verification

After a batch of related edits:

1. `pnpm typecheck`
2. `pnpm build`
3. `pnpm start`, then load the page and confirm the affected section renders.

For visual work, compare against `DESIGN.md` — that file records this app's
visual direction and should be preserved rather than re-derived.

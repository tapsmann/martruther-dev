# Martruther Logistics

The public marketing site for **Martruther Logistics** — freight and haulage in
Harare, Zimbabwe. A single-page, fully static React application: hero, services,
about, fleet, and a quote-request form.

There is no backend. The quote form composes a `mailto:` link and a WhatsApp
deep link in the browser, so nothing is stored, proxied, or processed on a
server.

## Features

- Editorial one-page layout with dark hero and contact bands framing the
  bright service sections.
- Service and fleet breakdowns for the 30T DAF and 15T Benz, each with its
  photograph behind the panel.
- Quote-request form that hands the visitor off to email or WhatsApp.
- Responsive navigation with a mobile menu and in-page anchor scrolling.
- Light, fixed palette driven by the `ml-*` custom properties on `.ml-site`.

## Tech stack

| Concern   | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | React Router 8 (framework mode, `ssr: false`) |
| Rendering | Client-side SPA, static build output          |
| UI        | React 19, Tailwind CSS 4, Tabler icons        |
| Language  | TypeScript                                    |
| Build     | Vite 8                                        |

## Develop locally

```bash
pnpm install
pnpm dev
```

The dev server prints its local URL (default <http://localhost:5173>).

## Commands

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Dev server with hot reload            |
| `pnpm build`     | Production build into `build/client/` |
| `pnpm start`     | Preview the production build locally  |
| `pnpm typecheck` | Generate route types, then type-check |
| `pnpm test`      | Run the Vitest suite                  |
| `pnpm format`    | Format with `oxfmt`                   |

## Deploying

`pnpm build` emits a self-contained static site in `build/client/`. Publish that
directory on any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages,
or plain object storage. No server runtime, database, or environment variables
are required.

`netlify.toml` is included and configured for Netlify. It publishes
`build/client` and falls back to `index.html` so deep links keep working.

If you serve the site from a subdirectory, set `basename` in
`react-router.config.ts` to match.

## Structure

```
app/
  root.tsx              # HTML shell, providers, error boundary
  entry.client.tsx      # Browser entry point
  routes.ts             # File-based route config (flatRoutes)
  routes/_index.tsx     # The whole site
  components/layout/    # Document shell
  lib/                  # Config values and helpers
  styles/               # Per-section stylesheets, imported by global.css
global.css            # Stylesheet entry point (imports Tailwind + styles/*)
public/                 # Favicons, app icons, web manifest
```

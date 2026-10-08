# Martruther Logistics — Agent Guide

This is a **static single-page frontend** for Martruther Logistics, built with
React Router 8 in framework mode (`ssr: false`) and Tailwind CSS 4. There is no
server, no database, and no agent runtime.

If `app/routes/_index.tsx` and `app/global.css` contain real content — they do —
that content is the current product and its established brand. Build additively,
preserve existing tokens, routes, and the palette, and do not re-derive a new
visual direction or overwrite shipped UI unless the user explicitly asks for a
redesign.

## Read these first

- `DEVELOPING.md` — stack, commands, directory layout, architecture notes.
- `DESIGN.md` — this app's visual direction and where the tokens live.

## Core rules

- **Do not reintroduce a backend.** The quote form in `app/routes/_index.tsx`
  composes `mailto:` and `wa.me` links client-side. Keep it that way. If a
  feature appears to need persistence, an API route, or a database, say so and
  confirm before adding one.
- **Configuration is code, not env vars.** Do not add `process.env` reads to
  drive app behavior or feature flags. There are no environment variables in
  this project. Brand values live as constants in `app/routes/_index.tsx`;
  document-level values in `app/lib/app-config.ts`.
- **Never hardcode secrets.** There is nothing to store in this project — no API
  keys, tokens, webhook URLs, or signing secrets.
- **Never fabricate.** If something is missing or a claim cannot be verified,
  say so.
- **Verify a change before reporting it done.** Run `pnpm typecheck` and
  `pnpm build`, then load the page and confirm the affected section renders.
- **Keep dependencies lean.** Prefer browser APIs over packages. Do not add a
  framework, state library, or component kit for a single component.

## Styling

Styles are split per section under `app/styles/`. `app/global.css` is the entry
point and imports Tailwind plus each partial **in cascade order** — do not
reorder those imports. The brand palette is custom properties on `.ml-site`.

- Put a rule in the stylesheet for the section it belongs to (`hero.css`,
  `fleet.css`, …). Use `shared.css` only for primitives that genuinely span
  sections.
- Keep each section's `@media` overrides at the bottom of its own file, after
  that section's base rules.
- Use an existing `ml-*` class when one fits; extend the namespace when it does
  not.
- Tailwind utilities are available and are used sparingly for one-off layout.
- The site is light-only. Do not add a `.dark` block or a theme toggle.
- Brand colors for this company live in `--ml-*`; do not hardcode new hexes in
  JSX when a token already expresses the intent.

## Routing and layout

- Routes are file-based via `flatRoutes()`. A file added under `app/routes/`
  becomes a route automatically.
- `components/layout/Layout.tsx` must **not** introduce an inner scroll
  container — the document handles scrolling so `scroll-behavior: smooth` and
  in-page anchors keep working.
- A route can export `meta()` for its title and description. Keep those accurate
  when content changes.

## Verification

```bash
pnpm typecheck   # regenerates route types, then type-checks
pnpm build       # static output into build/client/
pnpm start       # preview the production build
```

After a batch of related edits: one typecheck, one build, one visual pass over
the affected section. Do not re-verify after every individual file.

## Scope discipline

Build what was asked. This is a marketing site — if a request implies a new
product surface (accounts, dashboards, admin tooling), confirm the direction
before building it rather than expanding the app speculatively.

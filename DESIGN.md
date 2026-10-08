# Visual Design Contract

This file records **this app's** visual direction. The fields below are the
source of truth: read them and preserve them on every build. The visual
direction is already established — extend it, do not re-derive a new one.

## Established direction

- **Product mode:** `persuade`
- **Audience and cadence:** Zimbabwean businesses and freight buyers making an
  urgent or considered enquiry; occasional, high-intent visits.
- **Visual world (name + the feeling it creates):** Roadside Dispatch — grounded,
  capable, and human, with the quiet confidence of a well-run yard at first
  light.
- **Palette family + neutral undertone:** Ink navy, road-surface blue-grey, warm
  paper, and signal amber; cool neutrals keep the orange accent purposeful
  rather than playful.
- **Type treatment:** Inter Variable with compact uppercase labels, tight display
  headlines, and generous readable body copy.
- **Composition:** Editorial one-page landing surface; dark hero and contact bands
  frame bright, scannable service sections with a strong route-line motif.
- **Shape language:** Square-edged panels, clipped corners, thin rules, route
  dots, and restrained radii; tactile but not glossy.
- **Anti-references (defaults this app must not drift toward):** Generic SaaS
  dashboards, stock-photo logistics clichés, oversized card grids,
  gradient-heavy startup pages, or the visual language of a multinational
  corporation.

## Where it lives

- **Palette:** custom properties on `.ml-site` in `app/styles/layout.css`
  (`--ml-navy`, `--ml-ink`, `--ml-blue`, `--ml-amber`, `--ml-berry`,
  `--ml-paper`, `--ml-line`, and friends). The page also carries explicit
  Tailwind arbitrary values for its background and text colour.
- **Type:** Inter Variable, self-hosted via `@fontsource-variable/inter`
  (`app/styles/base.css`).
- **Layout:** the `ml-*` class namespace — `.ml-container`, `.ml-hero`,
  `.ml-section`, `.ml-kicker`, `.ml-button`, `.ml-quote-form`, and the
  per-section grids. Each section has its own stylesheet under `app/styles/`;
  see [DEVELOPING.md](DEVELOPING.md) for the import order.

## Light only

The site has a single fixed palette and no theme switch. Keep it that way — do
not add a `.dark` block or a theme toggle unless explicitly asked.

## Guardrails

- Keep the `ml-*` class names and custom-property names intact; express changes
  through token _values_, type, spacing, and composition — not by forking the
  naming scheme or rebuilding sections from scratch.
- One breakpoint system, not a new one per component.
- Density comes from data, not prose. Subtract explanatory chrome; never
  subtract the visual craft that makes the site feel designed.
- Compare against real products in the chosen mode, not against a generic SaaS
  template.

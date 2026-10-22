export const APP_TITLE = "Martruther Logistics";

/**
 * Absolute origin of the deployed site, no trailing slash.
 *
 * SET THIS BEFORE LAUNCH. The site is not deployed yet, so the value below is
 * a placeholder on the reserved `.example` TLD (RFC 2606) - it can never resolve
 * by accident. Every canonical URL, every `og:url`, every sitemap entry and
 * every llms.txt link is derived from this one constant, so replacing it here
 * updates the whole site in one edit.
 *
 * Two files still hardcode it because they are static files served straight
 * from `public/` and cannot import TypeScript:
 *
 *   - `public/robots.txt`  -> the `Sitemap:` line
 *   - `public/sitemap.xml` -> the four `<loc>` URLs
 *   - `public/llms.txt`    -> the page links
 *
 * Search for `martruther.example` across the repo to find every occurrence.
 */
export const SITE_URL = "https://martruther.example";

/**
 * Brand name as it should appear in titles and Open Graph output. Sub-pages
 * use "<Page> - <SITE_NAME>" so every title on the site follows one pattern.
 */
export const SITE_NAME = APP_TITLE;

/** Site-wide description, used for the home page and as the OG fallback. */
export const SITE_DESCRIPTION =
  "Reliable freight and haulage from Martruther Logistics in Harare. Request a quote for 15T and 30T transport across Zimbabwe.";

/**
 * Home page title. Brand first, then what the business does, so the home page
 * and the "<Page> - <Brand>" sub-pages stay one coherent set.
 */
export const SITE_HOME_TITLE =
  "Martruther Logistics | Freight & haulage in Harare, Zimbabwe";

/** Absolute URL of the brand badge, used for `og:image` on every page. */
export const SITE_OG_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F53330abe4fc44fbea39222e8deb82a96%2Fa9ed004b29fa40e7a1d66e17f7d40f60?format=webp&width=800&height=1200";

import type { MetaDescriptor } from "react-router";

import {
  SITE_DESCRIPTION,
  SITE_HOME_TITLE,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "./app-config";

/**
 * One builder for every page's head tags, so titles, descriptions, canonicals
 * and Open Graph output cannot drift apart between routes.
 *
 * Each route calls this with its own path, title and description. Everything
 * site-wide (brand suffix, og:site_name, twitter:card, the absolute origin)
 * comes from `app-config.ts` and is applied here exactly once.
 */
export function seoMeta(args: {
  /** Route path, including the leading slash: "/", "/terms", "/privacy". */
  path: string;
  /** Page title. Omit on the home page, which uses the branded site title. */
  title?: string;
  /** Meta description. Falls back to the site-wide description. */
  description?: string;
  /** Absolute image URL for social cards. Falls back to the brand badge. */
  image?: string;
}): MetaDescriptor[] {
  const { path, title, description = SITE_DESCRIPTION, image } = args;

  // Home page: brand first, then what the business does. Sub-pages keep the
  // "<Page> - <Brand>" shape so every title on the site reads the same way.
  const fullTitle = title ? `${title} - ${SITE_NAME}` : SITE_HOME_TITLE;

  // Canonical origin, no trailing slash except for the root path.
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const ogImage = image ?? SITE_OG_IMAGE;

  return [
    { title: fullTitle },
    { name: "description", content: description },

    // Canonical. Note: because this is a static SPA (ssr: false) these tags
    // are applied during hydration, not baked into build/client/index.html.
    // See the deployment notes in AGENTS.md before relying on them for
    // indexing - search engines that execute JavaScript will see them,
    // crawlers that do not, will not.
    { tagName: "link", rel: "canonical", href: url },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: "en_ZW" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}

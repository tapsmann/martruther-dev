import { useEffect } from "react";
import { useLocation } from "react-router";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Offset left for the floating header, so an anchored section heading is not
 * hidden underneath it. Mirrors the `scroll-margin-top` in `styles/page.css`.
 */
const ANCHOR_OFFSET = 104;

/**
 * Handles `/#section` deep links.
 *
 * Two things had to be worked around:
 *
 *  - The target element does not exist when the router commits the navigation,
 *    and the router resets scroll to the top afterwards, so a single attempt
 *    loses the race. We retry until the destination is actually reached.
 *  - `scroll-behavior: smooth` on `html` turns every retry into a competing
 *    animation measured mid-flight, which drifts the destination. The scroll
 *    below is therefore instant and idempotent.
 *
 * Same-page anchor clicks still animate, because those are native browser
 * jumps driven by `scroll-behavior`, not by this hook.
 */
const RETRY_DELAYS = [0, 100, 250, 500];

function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = hash.slice(1);
    if (!target) return;

    let cancelled = false;
    const timers: number[] = [];

    const scrollToTarget = () => {
      if (cancelled) return false;
      const el = document.getElementById(target);
      if (!el) return false;
      const top =
        el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET;
      if (Math.abs(window.scrollY - top) < 4) return true;
      window.scrollTo({ top, behavior: "instant" });
      return false;
    };

    for (const delay of RETRY_DELAYS) {
      timers.push(
        window.setTimeout(() => {
          if (scrollToTarget()) {
            for (const t of timers) window.clearTimeout(t);
          }
        }, delay),
      );
    }

    return () => {
      cancelled = true;
      for (const t of timers) window.clearTimeout(t);
    };
  }, [pathname, hash]);
}

/**
 * App shell shared by every route. The floating header and the detailed footer
 * live here rather than inside a page, so navigating to the legal pages keeps
 * both in place.
 *
 * Scrolling is deliberately left to the document rather than an inner scroll
 * container, so `scroll-behavior: smooth` and the in-page anchor links behave
 * normally.
 */
export function Layout({ children }: LayoutProps) {
  useHashScroll();

  return (
    <div className="ml-site">
      <a className="ml-skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="ml-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

import { LOGO_URL, NAV_ITEMS } from "@/lib/site";

/**
 * Floating site header. It renders on every route (it lives in `Layout`), so
 * the section links have to resolve back to the home page: on `/terms` a bare
 * `#services` hash would look for an anchor that is not in the document.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  function hrefFor(hash: string) {
    return onHome ? `#${hash}` : `/#${hash}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="ml-header">
      <div className="ml-container ml-header-inner">
        <Link
          to="/"
          className="ml-brand"
          aria-label="Martruther Logistics home"
        >
          <img src={LOGO_URL} alt="" className="ml-brand-mark" />
          <span className="ml-brand-copy">
            <strong>MARTRUTHER</strong>
            <span>LOGISTICS</span>
          </span>
        </Link>

        <nav className="ml-desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.hash} to={hrefFor(item.hash)} preventScrollReset>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="ml-header-cta"
          to={hrefFor("contact")}
          preventScrollReset
        >
          Get a quote <IconArrowRight size={17} stroke={1.8} />
        </Link>

        <button
          type="button"
          className="ml-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="ml-mobile-nav"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.hash}
              to={hrefFor(item.hash)}
              preventScrollReset
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="ml-mobile-cta"
            to={hrefFor("contact")}
            preventScrollReset
            onClick={closeMenu}
          >
            Get a quote <IconArrowRight size={17} />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

import { Link } from "react-router";

import { seoMeta } from "@/lib/seo";
import { EMAIL } from "@/lib/site";

export function meta() {
  return seoMeta({
    path: "/cookies",
    title: "Cookie policy",
    description:
      "Which cookies and local storage this website uses and why, the third-party requests it makes, how the quote form works, and how to manage consent.",
  });
}

export default function CookiesRoute() {
  return (
    <article className="ml-page">
      <div className="ml-container ml-page-inner">
        <nav className="ml-page-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Cookie policy</span>
        </nav>

        <header className="ml-page-head">
          <p className="ml-kicker ml-kicker-dark">
            <span className="ml-kicker-line" /> Legal
          </p>
          <h1>Cookie policy</h1>
          <p className="ml-page-updated">Last updated: to be confirmed</p>
        </header>

        <div className="ml-prose">
          <p className="ml-notice" role="note">
            <strong>Placeholder copy.</strong> This page is a structural
            placeholder. The technical claims below reflect how this site is
            actually built today, but the legal framing needs review before
            publishing.
          </p>

          <h2>The short version</h2>
          <p>
            This website sets no tracking cookies, runs no analytics and loads
            no third-party advertising scripts. It does not follow you around
            the web.
          </p>

          <h2>What we store in your browser</h2>
          <p>
            The site keeps a small amount of data in your browser so the mobile
            menu remembers its state within a visit. This is cleared when you
            close the tab and is never sent to us.
          </p>

          <h2>Third-party requests</h2>
          <p>
            Two things are loaded from elsewhere and your browser will contact
            those providers:
          </p>
          <ul>
            <li>
              Our web font is self-hosted and served from this site, so no font
              provider is contacted.
            </li>
            <li>
              The logo image is served from a content delivery network operated
              by the platform this site was built with. Loading it shares your
              IP address with that provider.
            </li>
          </ul>
          <p>
            Consider self-hosting the logo to remove even that request. See the
            note at the end of this page.
          </p>

          <h2>Quote form</h2>
          <p>
            The quote form does not submit to us. It composes a message in your
            browser and hands it to your own email or WhatsApp client, so the
            details you enter go directly to those third-party services.
          </p>

          <h2>Managing cookies</h2>
          <p>
            You can clear or block cookies and site data in your browser
            settings at any time. Because this site relies on nothing essential
            being stored, blocking storage should not break it.
          </p>

          <h2>Consent</h2>
          <p>
            Since we set no non-essential cookies, we do not show a consent
            banner today. If you later add analytics, advertising or any other
            non-essential tracker, this page and a consent mechanism both need
            to be added.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can go to{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>

        <footer className="ml-page-foot">
          <Link className="ml-button ml-button-primary" to="/">
            Back to home
          </Link>
          <span className="ml-page-foot-links">
            <Link to="/terms">Terms of service</Link>
            <Link to="/privacy">Privacy policy</Link>
          </span>
        </footer>
      </div>
    </article>
  );
}

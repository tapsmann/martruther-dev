import { Links, Meta, Outlet, Scripts } from "react-router";
import type { LinksFunction } from "react-router";

import { Layout as AppLayout } from "@/components/layout/Layout";
import { APP_TITLE } from "@/lib/app-config";

import stylesheet from "./global.css?url";

export const links: LinksFunction = () => [
  // The hero/contact band photograph is the page's largest paint. Preloading
  // it lets the browser fetch it alongside the CSS instead of discovering it
  // only once the stylesheet has applied `--ml-truck-photo`. The href must
  // match the url() in `styles/layout.css` exactly.
  { rel: "preload", as: "image", type: "image/webp", href: "/band-truck.webp" },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a2231" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={APP_TITLE} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icon-180.svg" />
        <link rel="manifest" href="/manifest.json" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {/*
          ScrollRestoration is intentionally omitted. It restores the previous
          scroll position on every navigation, which fights in-page anchor
          links: jumping from /terms to /#fleet would be yanked back to the top
          after the anchor scroll. Anchor navigation matters more here than
          remembering scroll across the four legal pages, which `useHashScroll`
          in `Layout` handles instead.
        */}
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";
  return (
    <div className="ml-site min-h-screen bg-[#f4f1ea] text-[#102536]">
      <div className="ml-container flex min-h-screen flex-col items-start justify-center gap-4 py-24">
        <p className="ml-kicker ml-kicker-dark">
          <span className="ml-kicker-line" /> Something went wrong
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          We could not load this page.
        </h1>
        <p className="max-w-prose text-[#102536]/70">{message}</p>
        <a className="ml-button ml-button-primary" href="/">
          Back to home
        </a>
      </div>
    </div>
  );
}

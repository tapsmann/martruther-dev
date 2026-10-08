import { fileURLToPath } from "node:url";

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      // Mirrors the `@/*` path mapping in tsconfig.json. The React Router
      // plugin handles this for the build, but Vite's dependency optimizer
      // scans entries with esbuild before that plugin runs, so it needs the
      // alias declared here or `pnpm dev` fails to pre-bundle.
      "@": fileURLToPath(new URL("./app", import.meta.url)),
    },
  },
  optimizeDeps: {
    // React Router discovers route modules outside Vite's default HTML crawl.
    // Scan the shell and the home route up front so a cold start does not make
    // the browser wait on the graph one module at a time.
    entries: ["app/entry.client.tsx", "app/root.tsx", "app/routes/_index.tsx"],
  },
  plugins: [tailwindcss(), reactRouter()],
});

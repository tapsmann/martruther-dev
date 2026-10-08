import path from "node:path";

import { defineConfig } from "vitest/config";

// Kept deliberately separate from vite.config.ts: the production config pulls
// in the React Router plugin, which this suite has no need for.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  test: {
    exclude: [
      "**/node_modules/**",
      "**/.git/**",
      "**/build/**",
      "**/.react-router/**",
    ],
  },
});

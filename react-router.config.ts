import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",
  // Static SPA: no server runtime, no SSR pass. The whole site is rendered in
  // the browser, so the build output is a plain set of static files.
  ssr: false,
  splitRouteModules: false,
  routeDiscovery: { mode: "initial" },
} satisfies Config;

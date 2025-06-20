// react-router.config.ts
import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

const config: Config = {
  ssr: false, // SPA mode, no server-side rendering
  presets: [vercelPreset()],
};

export default config;

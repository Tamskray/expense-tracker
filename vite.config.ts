import react from "@vitejs/plugin-react";
// import path from "node:path";
import { defineConfig } from "vite";

// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@hooks": "/src/hooks",
      "@store": "/src/store",
      "@components": "/src/components",
      "@pages": "/src/pages",
      // "@assets": "/src/assets",
    },
  },
  plugins: [react()],
});

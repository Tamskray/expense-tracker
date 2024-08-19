import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/

export default defineConfig({
  server: {
    host: "0.0.0.0", // allow access from outside container
    port: 5173,
  },
  plugins: [react(), svgr()],
});

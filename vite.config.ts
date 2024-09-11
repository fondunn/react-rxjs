import typescript from "@rollup/plugin-typescript";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    host: true,
    port: 8080,
    origin: "http://0.0.0.0:8080",
    watch: {
      usePolling: true,
    },
  },
  plugins: [TanStackRouterVite(), react({ tsDecorators: true }), typescript()],
});

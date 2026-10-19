import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const githubPreviewHosts = [".app.github.dev", ".githubpreview.dev"];

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  // Allow Codespaces forwarded-port URLs without disabling Vite's host check.
  server: { host: true, port: 5173, allowedHosts: githubPreviewHosts },
  preview: { host: true, port: 4173, allowedHosts: githubPreviewHosts },
});

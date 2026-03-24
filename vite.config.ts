import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "docs",
  build: {
    outDir: ".",
    emptyOutDir: false
  }
});

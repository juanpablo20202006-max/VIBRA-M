import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Puerto personalizado: 3005 (diferente a 3000, 5173, 8080)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./"),
    },
  },
  server: {
    port: 3005,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "index.html"),
        disenos: path.resolve(import.meta.dirname, "disenos.html"),
        demo: path.resolve(import.meta.dirname, "demo.html"),
      },
    },
  },
});

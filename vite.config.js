import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://social-media-rest-api-xpqj.onrender.com/api",
    },
  },
});
// "/api": "https://localhost:4000/api",
// "/api": "https://social-media-rest-api-xpqj.onrender.com",

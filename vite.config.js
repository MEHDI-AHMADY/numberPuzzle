import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "number puzzle",
        short_name: "numberPuzzle",
        description: "a simple number puzzle",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/images/puzzleIcon192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/puzzleIcon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    outDir: "assets/css",
    emptyOutDir: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "assets/css/main.scss"),
        style: resolve(__dirname, "assets/css/style.scss"),
      },
      output: {
        assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === "main.css") {
        //     return "main.min.css";
        //   }
          if (assetInfo.name === "style.css") {
            return "style.min.css";
          }
          return "[name].min[extname]";
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Use the modern compiler API
        silenceDeprecations: ['legacy-js-api', 'import'], // Silence specific deprecation warnings
      },
    },
  },
});

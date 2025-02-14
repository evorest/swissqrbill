import { config, defineConfig } from "@schoero/vite-config";


/** @type {import('vitest/config').UserConfig} */
export default defineConfig({
  ...config,
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/bundle/index.ts",
      fileName: () => "swissqrbill.js",
      formats: ["umd"],
      name: "SwissQRBill"
    },
    minify: false,
    outDir: "lib/bundle",
    target: "es6"
  },
  plugins: [
    ...config.plugins ?? []
  ]
});

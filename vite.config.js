const { defineConfig } = require("vite");
const { resolve } = require("path");

export default defineConfig({
  plugins: [],
  root: resolve("./static/src"),
  base: "/static/",
  build: {
    rollupOptions: {
      input: {
        poll: resolve("./static/src/js/poll.jsx"),
      },
    },
    outDir: resolve("./static/dist"),
    manifest: true,
  },
});

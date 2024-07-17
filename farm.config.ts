import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  vitePlugins: [vue()],
  server: {
    port: 5656,
    // open: true,
    proxy: {
      "/api": {
        target: `http://localhost:6666`,
        changeOrigin: true,
        pathRewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
        "@composables": fileURLToPath(
          new URL("./src/composables", import.meta.url)
        ),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
      },
    },
    server: {
      host: env.HOST,
      port: Number(env.PORT),
      proxy: {
        "/api": {
          target: env.PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/components/RemoteComponent.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    modulePreload: false,
    cssCodeSplit: false,
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  base: "/",
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
});

import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import path from "path";

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  base: '/selfcrypto/',
  publicDir:'public',
  optimizeDeps: { // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext", 
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      supported: { 
        bigint: true 
      },
    },
  },
  build: {
    // minify: false,
    target: "esnext",

    rollupOptions: {
      // maxParallelFileOps: 2,
      cache: false,
    },
    outDir: "../selfcrypto",

    terserOptions: {
        compress: {
            //生产环境时移除console
            drop_console: true,
            drop_debugger: true,
        },
    },
  },
  plugins: [
    // vue()
    createVuePlugin(),
  ],
});

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import path from "path";
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    UnoCSS(),
    solid(),
    ],
    
  server: {
    port: 3001,
  },
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "*": path.resolve(""),
    },
  },
  build: {
    target: 'esnext',
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"



// https://vitejs.dev/config/
export default defineConfig({


  plugins: [vue()],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src'),
    }
  },
  base: '/',  // 保持这个配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/style/main.scss";`
  //     }
  //   }
  // }
})

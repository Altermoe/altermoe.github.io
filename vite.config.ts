import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(() => {
  return {
    define: {
      // 关闭选项式 API 支持
      __VUE_OPTIONS_API__: false,

      // 在生产环境中关闭 devtools 支持
      __VUE_PROD_DEVTOOLS__: false,

      // 禁用生产版本中水合不匹配的详细警告以优化
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },

    envDir: './envs',

    server: {
      host: '0.0.0.0',
      port: 12200,
      cors: true,
    },

    preview: {
      host: '0.0.0.0',
      port: 12201,
      cors: true,
    },

    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
    },

    plugins: [
      Vue(),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: './types/imports.d.ts'
      }),
    ],
  }
})

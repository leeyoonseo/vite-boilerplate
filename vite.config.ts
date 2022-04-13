import path from 'path';
import { defineConfig, loadEnv, UserConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default ({ command, mode }: { command: string; mode: string }) => {
  const config: UserConfig = {
    server: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        // https://vitejs.dev/config/#server-proxy
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/layouts': path.resolve(__dirname, './src/layouts'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/store': path.resolve(__dirname, './src/store'),
        '@/assets': path.resolve(__dirname, './src/assets'),
      },
    },
    plugins: [
      Vue(),
      Components({
        /* options */
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
    ],
    // https://vitejs.dev/guide/env-and-mode.html#env-variables
    envDir: './env',
    build: {
      rollupOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
      },
    },
  };

  if (command === 'serve') {
    // ...
  }

  if (mode === 'development') {
    // ...
  }

  return config;
};

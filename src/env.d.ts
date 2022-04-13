/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
  interface ImportMetaEnv {
    readonly NODE_ENV: string;
    readonly VITE_APP_TITLE: string;
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

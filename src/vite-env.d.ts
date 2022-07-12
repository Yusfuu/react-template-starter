/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_API_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

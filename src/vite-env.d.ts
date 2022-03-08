/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_MAPBOX_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

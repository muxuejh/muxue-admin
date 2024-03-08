import 'vue-router'

/* vite */
declare interface ViteEnv {
  NODE_ENV: 'development' | 'production' | 'test'
  VITE_GLOB_APP_TITLE: string
  VITE_APP_BASE_API: string
  VITE_SERVE: string
  VITE_APP_PORT: number
  VITE_APP_OPEN: boolean
}
interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

/* RouteMeta */
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    hiddenOfSubMenu?: boolean
    hidden?: boolean
    keepAlive?: boolean
  }
}

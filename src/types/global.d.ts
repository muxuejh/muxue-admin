/* vite */
declare interface ViteEnv {
  NODE_ENV: 'development' | 'production' | 'test'
  VITE_GLOB_APP_TITLE: string
  VITE_APP_BASE_API: string
  VITE_SERVE: string
}
interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

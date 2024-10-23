/// <reference types="vite/client" />

/** 拓展 ENV 环境变量对象的类型 */
interface ImportMetaEnv {
  /** 页面标题 */
  readonly VITE_TITLE: string

  /** websocket 地址 */
  readonly VITE_SOCKET_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

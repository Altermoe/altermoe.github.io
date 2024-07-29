/// <reference types="vite/client" />

/** 拓展 ENV 环境变量对象的类型 */
interface ImportMetaEnv {
  /** 页面标题 */
  readonly VITE_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

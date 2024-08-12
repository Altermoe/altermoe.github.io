<script setup lang="ts">
import { useMonaco } from '@/hooks'

defineOptions({
  meta: {
    title: '演示模块',
    summary: '通过 defineOptions 定义组件元信息，并通过路由懒加载组件进行预览渲染',
  },
})

const CODE = `\
/**
 * Vue \`<script setup>\` compiler macro for declaring a component's additional
 * options. This should be used only for options that cannot be expressed via
 * Composition API - e.g. \`inheritAttrs\`.
 *
 * @see {@link https://vuejs.org/api/sfc-script-setup.html#defineoptions}
 */
declare function defineOptions(options?: Record<string, unknown>): void;

// Child.vue - script
defineOptions({
  meta: {
    title: '演示模块',
    summary: '通过 defineOptions 定义组件元信息',
  },
})

/**
 * \`defineOptions\` 定义的属性将会与组件属性混合，一般建议使用一个独立的字段放置元信息
 */
declare module '*.vue' {
  const component: {
    meta?: {
      title?: string
      summary?: string
    }
  }
  export default component
}

// Parent.vue - template
const getMetaInfo = () => {
  const module = await import('/Child.vue')
  return module.default.meta
}
`

const containerRef = ref<HTMLElement>()

useMonaco(containerRef, CODE, {
  readOnly: true,
  language: 'typescript',
})
</script>

<template>
  <div class="h-fit">
    <div ref="containerRef" class="h-96 rounded overflow-hidden border border-color-NeutralStroke1" />
  </div>
</template>

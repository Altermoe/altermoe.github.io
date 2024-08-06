<script setup lang="ts">
defineOptions({
  name: 'WinText'
})

withDefaults(defineProps<{
  /** 组件渲染的 tag */
  tag?: 'div' | 'p' | 'span'
  /** 文本类型 */
  type?: 'caption' | 'body' | 'body-strong' | 'subtitle' | 'title' | 'title-large' | 'display'
  /** 是否不换行? 超出宽度时自动使文本溢出省略 */
  inline?: boolean
}>(), {
  tag: 'div',
  type: 'body'
})
</script>

<template>
  <component
    :is="tag"
    :class="[
      type,
      inline ? 'is-inline' : '',
    ]"
    class="win-text"
  >
    <slot name="default" />
  </component>
</template>

<style scoped>
.win-text {
  &.caption {
    @apply text-xs text-text-secondary;
  }

  &.body {
    @apply text-sm;
  }

  &.body-strong {
    @apply text-sm font-semibold;
  }

  &.subtitle {
    @apply text-xl font-semibold;
  }

  &.title {
    @apply text-[28px] leading-[36px] font-semibold;
  }

  &.title-large {
    @apply text-[40px] leading-[52px] font-semibold;
  }

  &.display {
    @apply text-[68px] leading-[92px] font-semibold;
  }

  &.is-inline {
    @apply overflow-hidden whitespace-nowrap text-ellipsis;
  }
}
</style>

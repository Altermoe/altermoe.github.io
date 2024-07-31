<script setup lang="ts">
defineOptions({
  name: 'WinText'
})

withDefaults(defineProps<{
  tag?: 'div' | 'p' | 'span'
  type?: 'caption' | 'body' | 'body-strong' | 'subtitle' | 'title' | 'title-large' | 'display'
}>(), {
  tag: 'span',
  type: 'body'
})
</script>

<template>
  <component
    :is="tag"
    :class="type"
    class="win-text"
  >
    <slot name="default" />
  </component>
</template>

<style lang="scss" scoped>
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
}
</style>

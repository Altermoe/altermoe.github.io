<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { WinText } from '@/components'

const props = defineProps<{
  route: RouteRecordRaw
}>()

const { state: meta } = useAsyncState<ComponentMeta>(async () => {
  const { component } = props.route
  if (typeof component !== 'function') return {}
  const module = await (component as () => Promise<{ default: { meta: ComponentMeta } }>)()
  return module.default?.meta ?? {}
}, {})
</script>

<template>
  <RouterLink :to="route.path" class="tool-item">
    <WinText class="mb-1">{{ meta.title }}</WinText>
    <WinText type="caption">{{ meta.summary }}</WinText>
  </RouterLink>
</template>

<style scoped>
.tool-item {
  flex-direction: column;
  @apply
    block
    w-full h-fit p-4 rounded
    border border-color-NeutralStroke1
    bg-color-NeutralBackground1
    select-none
    cursor-pointer
  ;

  &:hover {
    @apply
      border-color-NeutralStroke1Hover
      bg-color-NeutralBackground1Hover
    ;
  }

  &:active {
    @apply
      border-color-NeutralStroke1Pressed
      bg-color-NeutralBackground1Pressed
    ;
  }
}
</style>

<script setup lang="ts">
import { WinText } from '@/components'
import { SKILL_LIST } from './data'
</script>

<template>
  <div class="p-6 h-full flex flex-col overflow-auto min-w-[408px]">
    <div v-for="group in SKILL_LIST" :key="group.title" class="mb-10">
      <WinText tag="div" type="subtitle" class="mb-3">
        {{ group.title }}
      </WinText>
      <div class="flex flex-wrap gap-4">
        <a
          v-for="item in group.children"
          :key="item.title"
          :href="item.link"
          class="card"
          target="_blank"
          rel="noreferrer"
        >
          <component :is="item.icon" class="w-12 h-12" />
          <div class="content">
            <WinText type="body-strong" inline class="flex-shrink-0">
              {{ item.title }}
            </WinText>
            <WinText type="caption" class="">
              {{ item.summary }}
            </WinText>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply
    box-border overflow-hidden
    border border-stroke-controlDefault
    w-[360px] h-[90px]
    px-5 rounded
    flex items-center gap-4
    bg-fill-controlDefault
    select-none
    cursor-pointer
  ;

  &:hover {
    @apply
      border-stroke-controlSecondary
      bg-fill-controlSecondary
    ;
  }

  &:active {
    @apply
      border-stroke-controlElevationBorder
      bg-fill-controlTertiary
    ;
  }
}

.content {
  @apply
    flex-1
    max-h-full overflow-hidden
    flex flex-col gap-0.5
    text-xs
  ;
}
</style>

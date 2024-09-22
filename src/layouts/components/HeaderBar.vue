<script setup lang="ts">
import { WinButton } from '@/components'
import { isDark } from '@/shared'

const collapse = defineModel<boolean>('collapse', {
  required: true,
})
</script>

<template>
  <div
    class="
      px-3 overflow-hidden
      absolute top-0 z-10
      flex justify-between items-center gap-2
    "
  >
    <WinButton square @click="collapse = !collapse">
      <svg  viewBox="0 0 1024 1024" version="1.1" fill="currentColor">
        <path d="M192 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
        <path d="M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="4267"></path>
        <path d="M192 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="4268"></path>
        <path d="M864 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32zM864 480H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32zM864 800H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></path>
      </svg>
    </WinButton>

    <WinButton circle @click="isDark = !isDark">
      {{ isDark ? '' : '' }}
    </WinButton>
  </div>
</template>

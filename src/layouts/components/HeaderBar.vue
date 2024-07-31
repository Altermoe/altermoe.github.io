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
      flex items-center gap-2
    "
  >
    <WinButton square @click="collapse = !collapse">
      {{ collapse ? '' : '' }}
    </WinButton>

    <WinButton circle @click="isDark = !isDark">
      {{ isDark ? '' : '' }}
    </WinButton>
  </div>
</template>

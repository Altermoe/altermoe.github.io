<script setup lang="ts">
import { useSocketStore } from '@/stores'

const socketStore = useSocketStore()
</script>

<template>
  <div class="h-full overflow-auto">
    <div>状态：{{ socketStore.status }}</div>
  </div>
</template>

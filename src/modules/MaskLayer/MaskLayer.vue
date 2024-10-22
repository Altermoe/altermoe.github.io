<script setup lang="ts">
import { useRender } from './hooks'

const canvasRef = ref<HTMLCanvasElement>()
useRender(canvasRef)
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed left-0 top-0 pointer-events-none z-[1000]"
    :width="800"
    :height="600"
  />
</template>

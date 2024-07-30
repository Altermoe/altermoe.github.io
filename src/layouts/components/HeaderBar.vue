<script setup lang="ts">
const collapse = defineModel<boolean>('collapse', {
  required: true,
})
</script>

<template>
  <div
    class="
      px-4
      absolute top-0 z-10 overflow-hidden flex items-center
      text-sm
    "
  >
    <div
      class="
        w-8 p-1 px-2
        grid place-content-center
        border rounded
        hover:bg-[skyblue]
        active:bg-[gold]
        font-mono
        select-none cursor-pointer
      "
      @click="collapse = !collapse"
    >
      {{ collapse ? '>' : '<' }}
    </div>
  </div>
</template>

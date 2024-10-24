<script setup lang="ts">
</script>

<template>
  <div class="p-6 h-full overflow-auto gap-4 flex flex-wrap place-content-start">
    <div
      v-for="i in 20"
      :ley="i"
      class="tool-item"
      :class="{
        large: i % 5 === 0
      }"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped>
.tool-item {
  @apply
    w-24 h-24 rounded
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

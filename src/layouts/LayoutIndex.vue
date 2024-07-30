<script setup lang="ts">
import { HeaderBar, NavigationMenu } from './components'
import { RouterView } from 'vue-router'

const collapse = ref(false)
</script>

<template>
  <div
    class="relative w-full h-full overflow-hidden pt-16 transition-[padding]"
    :class="collapse ? '' : 'pl-[200px]'"
  >
    <HeaderBar
      v-model:collapse="collapse"
      class="h-16 transition-[left_width]"
      :class="collapse ? 'left-0 w-full' : 'left-[200px] w-[calc(100%_-_200px)]'"
    />

    <NavigationMenu
      class="w-[200px] transition-[transform]"
      :class="collapse ? '-translate-x-[200px]' : ''"
    />

    <RouterView />
  </div>
</template>

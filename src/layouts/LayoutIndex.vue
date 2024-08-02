<script setup lang="ts">
import { HeaderBar, NavigationMenu } from './components'
import { RouterView } from 'vue-router'
import { Github } from '@/icons'

const collapse = ref(false)
</script>

<template>
  <div
    class="
      relative w-full h-full overflow-hidden pt-16
      bg-bg-solidBase
      text-sm text-text-primary
      transition-[padding]
    "
    :class="collapse ? '' : 'pl-[200px]'"
  >
    <HeaderBar
      v-model:collapse="collapse"
      class="h-16 transition-[left_width]"
      :class="collapse ? 'left-0 w-full' : 'pl-0 left-[200px] w-[calc(100%_-_200px)]'"
    />

    <NavigationMenu
      class="w-[200px] transition-[transform]"
      :class="collapse ? '-translate-x-full' : ''"
    >
      <template #logo>
        <div class="h-16 px-4 flex-shrink-0 flex items-center">
          <img class="w-10 h-10" src="/favicon.png" alt="favicon" />
          <div class="flex-1 pl-4 flex flex-col">
            <div>夕云葛城</div>
            <div class="h-5 flex items-center gap-1">
              <a href="https://github.com/Altermoe" target="_blank" rel="noreferrer">
                <Github class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </template>
    </NavigationMenu>

    <div
      class="
        w-full h-full overflow-auto
        border-t-[1px] border-stroke-cardDefault
        bg-bg-layerDefault
      "
      :class="collapse ? '' : 'border-l-[1px] rounded-[8px_0_0_0]'"
    >
      <RouterView />
    </div>
  </div>
</template>

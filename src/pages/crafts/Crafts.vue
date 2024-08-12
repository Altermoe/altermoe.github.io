<script setup lang="ts">
import { WinButton } from '@/components'
import { CraftPreview } from './components'

const router = useRouter()
</script>

<template>
  <div class="h-full overflow-x-hidden overflow-y-auto">
    <RouterView #default="{ Component, route }">
      <Transition name="craft" mode="out-in">
        <div v-if="Component" class="p-6">
          <div class="w-full mb-4">
            <WinButton @click="() => router.go(-1)">
              返回
            </WinButton>
          </div>

          <component :is="Component" />
        </div>

        <div v-else class="p-6 h-full grid grid-cols-[repeat(auto-fill,192px)] auto-rows-auto place-content-start gap-4">
          <CraftPreview
            v-for="child in route.matched[0].children"
            :key="child.path"
            :route="child"
          />
        </div>
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.craft-enter-active {
  transition: all 100ms ease;
}

.craft-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.craft-leave-active {
  transition: all 100ms ease;
}

.craft-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>

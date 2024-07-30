<script setup lang="ts">
import { RouterLink } from 'vue-router'

const router = useRouter()
const currentRoute = useRoute()
</script>

<template>
  <div
    class="
      h-full p-2
      absolute left-0 top-0 z-10
      border-r-[1px]
      flex flex-col gap-2
      text-sm
    "
  >
    <RouterLink
      v-for="route in router.getRoutes()"
      :key="route.path"
      :to="route.path"
      class="
        p-2
        border rounded
        select-none
        hover:bg-[skyblue]
        active:bg-[gold]
        cursor-pointer
        overflow-hidden
        whitespace-nowrap text-ellipsis
      "
      :class="{
        'is-actived': route.path === currentRoute.path,
      }"
    >
      {{ route.name }}
    </RouterLink>
  </div>
</template>

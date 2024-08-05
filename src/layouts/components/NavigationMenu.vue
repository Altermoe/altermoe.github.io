<script setup lang="ts">
import { RouterLink } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
    class="
      h-full
      absolute left-0 top-0 z-10
      flex flex-col
    "
  >
    <slot name="logo" />

    <div
      class="
        flex-1 px-2 overflow-auto
        flex flex-col gap-2
      "
    >
      <RouterLink
        v-for="route in router.options.routes"
        :key="route.path"
        :to="route.path"
        active-class="is-actived"
        exact-active-class="is-exact-actived"
        class="nav-router-link"
        draggable="false"
      >
      <div v-if="route.meta?.icon" class="w-5 h-5 font-[SegoeIcons]">
        {{ route.meta.icon }}
      </div>
      <span>{{ route.name }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-router-link {
  @apply
    p-2 overflow-hidden
    flex items-center gap-2
    rounded
    bg-fill-subtleTransparent
    cursor-pointer
    select-none
    whitespace-nowrap text-ellipsis
  ;

  &:hover {
    @apply bg-fill-subtleSecondary;
  }

  &:active {
    @apply bg-fill-subtleTertiary;
  }

  &.is-actived {
    @apply bg-fill-subtleSecondary;
  }
}
</style>

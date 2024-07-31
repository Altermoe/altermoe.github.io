<script setup lang="ts">
defineOptions({
  name: 'WinButton',
})

defineProps<{
  disabled?: boolean
  square?: boolean
  circle?: boolean
}>()
</script>

<template>
  <button
    class="win-button"
    :class="{
      'is-square': square,
      'is-circle': circle,
    }"
  >
    <slot name="default" />
  </button>
</template>

<style lang="scss" scoped>
.win-button {
  @apply
    py-[5px] px-[12px] rounded
    border border-stroke-circleElevationBorder-0 border-b-stroke-circleElevationBorder-100
    bg-fill-controlDefault
    text-xs leading-[20px] text-text-primary font-[SegoeIcons]
    transition
    ease-out
  ;

  &:hover {
    @apply bg-fill-controlSecondary;
  }

  &:active {
    @apply
      border-b-stroke-circleElevationBorder-0
      text-text-secondary
      bg-fill-controlTertiary
    ;
  }

  &.is-square, &.is-circle {
    @apply w-8 h-8 px-[5px];
  }

  &.is-circle {
    @apply
      rounded-full
      border-b-stroke-circleElevationBorder-0
    ;
  }
}
</style>

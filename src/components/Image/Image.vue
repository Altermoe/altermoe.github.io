<script setup lang="ts">
defineOptions({
  name: 'WinImage',
})

const props = defineProps<{
  src?: string
  crossorigin?: '' | 'anonymous' | 'use-credentials'
}>()

const loading = ref(Boolean(props.src))
const error = ref(false)

watch(() => props.src, (url) => {
  loading.value = Boolean(url)
})

const setLoading = (isLoading: boolean, isError = false) => {
  loading.value = isLoading
  error.value = isError
}
</script>

<template>
  <div class="win-image">
    <slot v-if="loading && !error" name="loading">
      <div>loading</div>
    </slot>

    <slot v-if="error" name="error">
      <div>error</div>
    </slot>

    <img
      v-show="!loading && !error"
      :src="src"
      :crossorigin="crossorigin"
      @load="() => setLoading(false)"
      @error="() => setLoading(false, true)"
    />
  </div>
</template>

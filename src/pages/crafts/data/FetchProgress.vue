<script setup lang="ts">
import { WinText, WinButton } from '@/components'
import { useMonaco } from '@/hooks'
import { downloadByFetch } from './examples'
import downloadByFetchCode from './examples/fetchProgress?raw'

defineOptions({
  meta: {
    title: 'fetch 上传/下载 进度',
    summary: '基于 ReadableStream 是比较容易实现监听 fetch 下载进度的，那么上传进度呢？',
  },
})

const editorRef1 = ref<HTMLElement>()

const downloadRecord = ref<number[]>([])

const status = ref({ progress: 0, speed: 0, loaded: 0, total: 0 })

const btnText = ref('')
// const throttledStatus = refThrottled(status, 100)

declare const globalThis: DedicatedWorkerGlobalScope

const bytesToText = (bytes: number) => {
  const units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB']
  const index = Math.floor(Math.log2(bytes) / 10)
  const maxIndex = units.length - 1
  return index > maxIndex
    ? `${(bytes / 2 ** (10 * maxIndex)).toFixed(0)} ${units[maxIndex]}`
    : `${(bytes / 2 ** (10 * index)).toFixed(0)} ${units[index]}`
}

const { isLoading, execute: download } = useAsyncState(async () => {
  // ================== 创建测试文件 ==================

  btnText.value = '正在准备文件...'

  const SIZE = 2 ** 30 // 1 GB

  const workerFn = (size: number) => {
    const data = new Uint8Array(size)
    for (let i = 0; i < data.byteLength; i++)
      data[i] = Math.floor(Math.random() * 256)
    globalThis.postMessage(data, [data.buffer])
  }
  const workerURL = URL.createObjectURL(new Blob([`(${workerFn})(${SIZE})`], { type: 'text/javascript' }))

  const worker = new Worker(workerURL, {
    name: 'demo-worker',
    type: 'module',
  })

  const { resolve, promise } = Promise.withResolvers<Uint8Array>()
  worker.addEventListener('message', (ev: MessageEvent<Uint8Array>) => {
    resolve(ev.data)
    worker.terminate()
    URL.revokeObjectURL(workerURL)
  })

  const data = await promise

  // ================== 下载文件 ==================

  btnText.value = '正在下载文件...'

  const url = URL.createObjectURL(new Blob([data], { type: 'text/plain' }))

  status.value = { progress: 0, speed: 0, loaded: 0, total: 0 }
  downloadRecord.value = []

  const startTime = Date.now()
  await downloadByFetch(url, {
    onStatusChange: ({ progress, speed, loaded, total }) => {
      status.value.progress = progress
      status.value.speed = speed
      status.value.loaded = loaded
      status.value.total = total
      downloadRecord.value.push(loaded)
    },
  })

  const total = downloadRecord.value.reduce((sum, loaded) => sum + loaded, 0)
  console.log({
    total: bytesToText(total),
    cost: Date.now() - startTime,
  })

  btnText.value = ''
}, undefined, {
  immediate: false,
})

useMonaco(editorRef1, downloadByFetchCode, {
  readOnly: true,
  language: 'typescript',
})
</script>

<template>
  <div class="h-fit">
    <div class="mb-6">
      <WinText type="subtitle" class="mb-2">Fetch 下载进度实现</WinText>

      <WinText type="caption" class="mb-6">注：当前测试文件从本地生成，无需流量。</WinText>

      <WinButton :disabled="isLoading" @click="() => download()">
        {{ btnText || '下载：1GB' }}
      </WinButton>

      <pre>{{ status }}</pre>
    </div>

    <div ref="editorRef1" class="h-96 rounded overflow-hidden border border-color-NeutralStroke1" />
  </div>
</template>

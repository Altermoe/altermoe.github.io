<script setup lang="ts">
import { WinText } from '@/components'
</script>

<template>
  <div class="h-full overflow-auto">
    <div
      class="
        p-6 pb-28 relative
        bg-[linear-gradient(to_bottom,light-dark(#D0D9E4,#020B20)_40%,transparent)]
      "
    >
      <WinText class="mb-4">
        你好，我是夕云葛城，来自广州，我是一名
      </WinText>

      <WinText
        type="subtitle"
        class="mb-4 first-letter:text-[56px] first-letter:leading-[56px] first-letter:float-left"
      >
        <span class="text-text-accentPrimary">前</span>土木老哥<br>端开发
      </WinText>

      <WinText class="mb-2">
        从事前端开发已经 4 年有余。<br />
        主要开发经验为业务中台、业务后台、SaaS 等强客户端交互的重型 Web 应用。<br />
      </WinText>

      <WinText class="mb-2">
        目前作为 Github 组织
        <a
          href="https://github.com/kongying-tavern"
          target="_blank"
          rel="noreferrer"
          class="text-signal-success underline underline-offset-2 decoration-dashed hover:decoration-solid"
        >空荧酒馆</a>
        前端开发组成员，活跃于开源项目
        <a
          href="https://github.com/kongying-tavern/map_register_v3"
          target="_blank"
          rel="noreferrer"
          class="text-signal-success underline underline-offset-2 decoration-dashed hover:decoration-solid"
        >空荧后厨</a>
        中。
      </WinText>
    </div>
  </div>
</template>

<style scoped>
</style>

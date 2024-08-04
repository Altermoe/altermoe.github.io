<script setup lang="ts">
import { WinText } from '@/components'
</script>

<template>
  <div class="h-full overflow-auto">
    <div
      class="
        relative
        bg-[linear-gradient(to_bottom,light-dark(#D0D9E4,#020B20)_30%,transparent_85%)]
      "
    >
      <div class="p-8">
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
          前端开发组成员活跃于空荧后厨等开源项目中。
        </WinText>
      </div>

      <div class="px-8 flex overflow-x-auto gap-4">
        <a class="repo-card" draggable="false" href="https://github.com/kongying-tavern/map_register_v3" target="_blank" rel="noreferrer">
          <img class="w-[54px] h-[54px] mb-5" src="https://dadian1.yuanshen.site/favicon.ico" draggable="false" />
          <WinText class="mb-1">空荧后厨</WinText>
          <WinText type="caption">空荧酒馆原神地图管理系统，基于 Deck.GL 地理信息可视化框架开发，性能优异。</WinText>
          <div class="text-right font-[SegoeIcons] translate-x-2 translate-y-6"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repo-card {
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all ease 150ms;
  user-select: none;
  @apply
    flex-shrink-0
    w-[200px] h-[220px] p-5
    border border-stroke-controlDefault rounded-lg
    bg-[light-dark(#F9F9F9A0,#2D2D2DA0)]
  ;

  &:hover {
    @apply
      border-stroke-controlSecondary
      bg-[light-dark(#F1F1F1A0,#3B3B3BA0)]
    ;
  }

  &:active {
    @apply
      border-stroke-controlElevationBorder
      bg-[light-dark(#F3F3F3A0,#363636A0)]
    ;
  }
}
</style>

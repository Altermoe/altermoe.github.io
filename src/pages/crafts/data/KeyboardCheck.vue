<script setup lang="ts">
defineOptions({
  meta: {
    title: '按键检测',
    summary: '【交互】通过事件监听器检测按键是否正确触发了动作函数。',
  },
})

interface KeyMeta {
  code: string;
  sub?: string;
  width?: number
  marginLeft?: number
  col?: number
}

const keyListGroup = ref<{
  key: string
  items: KeyMeta[]
  paddingBottom?: number
}[]>([
  {
    key: 'Esc',
    items: [
      { code: 'Esc' },
      { code: 'F1', marginLeft: 56 },
      { code: 'F2' },
      { code: 'F3' },
      { code: 'F4' },
      { code: 'F5', marginLeft: 24 },
      { code: 'F6' },
      { code: 'F7' },
      { code: 'F8' },
      { code: 'F9', marginLeft: 24 },
      { code: 'F10' },
      { code: 'F11' },
      { code: 'F12' },
      { code: 'PrtSc', marginLeft: 8 },
      { code: 'Lock', sub: 'Scroll' },
      { code: 'Pause' },
    ],
  },
  {
    key: '`',
    items: [
      { code: '`', sub: '~' },
      { code: '1', sub: '!' },
      { code: '2', sub: '@' },
      { code: '3', sub: '#' },
      { code: '4', sub: '$' },
      { code: '5', sub: '%' },
      { code: '6', sub: '^' },
      { code: '7', sub: '&' },
      { code: '8', sub: '*' },
      { code: '9', sub: '(' },
      { code: '0', sub: ')' },
      { code: '-', sub: '_' },
      { code: '=', sub: '+' },
      { code: '← Backspace', width: 96 },
      { code: 'Ins', marginLeft: 8 },
      { code: 'Home' },
      { code: 'PgUp' },
      { code: 'Lock', sub: 'Num', marginLeft: 8 },
      { code: '/' },
      { code: '*' },
      { code: '-' },
    ],
  },
  {
    key: 'Tab',
    items: [
      { code: 'Tab', width: 72 },
      { code: 'Q' },
      { code: 'W' },
      { code: 'E' },
      { code: 'R' },
      { code: 'T' },
      { code: 'Y' },
      { code: 'U' },
      { code: 'I' },
      { code: 'O' },
      { code: 'P' },
      { code: '[', sub: '{' },
      { code: ']', sub: '}' },
      { code: '\\', sub: '|', width: 72 },
      { code: 'Del', marginLeft: 8 },
      { code: 'End' },
      { code: 'PgDn' },
      { code: 'Home', sub: '7', marginLeft: 8 },
      { code: '↑', sub: '8' },
      { code: 'Up', sub: '9' },
      { code: '+' },
    ],
  },
  {
    key: 'CapsLock',
    items: [
      { code: 'CapsLock', width: 84 },
      { code: 'A' },
      { code: 'S' },
      { code: 'D' },
      { code: 'F' },
      { code: 'G' },
      { code: 'H' },
      { code: 'J' },
      { code: 'K' },
      { code: 'L' },
      { code: ';', sub: ':' },
      { code: '\'', sub: '"' },
      { code: 'Enter', width: 116 },
      { code: '←', sub: '4', marginLeft: 184 },
      { code: '5' },
      { code: '→', sub: '6' },
    ],
  },
  {
    key: 'Shift',
    items: [
      { code: '↑ Shift', width: 112 },
      { code: 'Z' },
      { code: 'X' },
      { code: 'C' },
      { code: 'V' },
      { code: 'B' },
      { code: 'N' },
      { code: 'M' },
      { code: ',', sub: '<' },
      { code: '.', sub: '>' },
      { code: '/', sub: '?' },
      { code: '↑ Shift', width: 144 },
      { code: '↑', marginLeft: 64 },
      { code: 'End', sub: '1', marginLeft: 64 },
      { code: '↓', sub: '2' },
      { code: 'Down', sub: '3' },
      { code: 'Enter' },
    ],
  },
  {
    key: 'Ctrl',
    items: [
      { code: 'Ctrl', width: 60 },
      { code: 'Win', width: 60 },
      { code: 'Alt', width: 60 },
      { code: '', width: 348 },
      { code: 'Alt', width: 60 },
      { code: 'Win', width: 60 },
      { code: 'Fn', width: 60 },
      { code: 'Ctrl', width: 60 },
      { code: '←', marginLeft: 8 },
      { code: '↓' },
      { code: '→' },
      { code: 'Ins', sub: '0', width: 104, marginLeft: 8 },
      { code: 'Del', sub: '.' },
    ],
  },
])
</script>

<template>
  <div class="h-fit">
    <div class="flex flex-col gap-2 border border-color-NeutralStroke1 rounded p-2" style="width: 1250px;">
      <div v-for="keylist in keyListGroup" :key="keylist.key" class="flex gap-2">
        <div
          v-for="key in keylist.items"
          :key="key.code"
          class="keycode"
          :style="[
            key.width ? `--w: ${key.width}px` : '',
            key.marginLeft ? `--ml: ${key.marginLeft}px` : '',
          ]"
        >
          <div v-if="key.sub">
            {{ key.sub }}
          </div>
          <div class="flex-1">
            {{ key.code }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keycode {
  border: 1px solid red;
  border-radius: 4px;
  width: var(--w, 48px);
  height: 48px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  font-size: 14px;
  margin-left: var(--ml, 0);

  @apply border-color-NeutralStroke1;

  &:hover {
    @apply bg-color-NeutralBackground1Hover;
  }

  &:active {
    @apply bg-color-NeutralBackground1Pressed;
  }
}
</style>

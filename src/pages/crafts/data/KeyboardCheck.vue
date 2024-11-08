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
}

const keyListGroup = ref<{
  key: string
  items: KeyMeta[]
}[]>([
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
    ],
  },
  {
    key: 'Shift',
    items: [
      { code: 'Shift', width: 112 },
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
      { code: 'Shift', width: 144 },
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
    ],
  },
])
</script>

<template>
  <div class="h-fit flex flex-col gap-2">
    <div v-for="keylist in keyListGroup" :key="keylist.key" class="flex gap-2">
      <div v-for="key in keylist.items" :key="key.code" class="keycode" :style="key.width ? `--w: ${key.width}px` : ''">
        <div v-if="key.sub">
          {{ key.sub }}
        </div>
        <div class="flex-1">
          {{ key.code }}
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
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;

  &:hover {
    background-color: #FFFF0080;
  }

  &:active {
    background-color: #aaaa17a0;
  }
}
</style>

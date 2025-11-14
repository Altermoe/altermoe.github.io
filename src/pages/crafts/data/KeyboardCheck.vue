<script setup lang="ts">
import { WinButton } from '@/components'

defineOptions({
  meta: {
    title: '按键检测',
    summary: '【交互】通过事件监听器检测按键是否正确触发了动作函数。',
  },
})

const KeyIds = ref(new Set<string>())

const reset = () => {
  KeyIds.value = new Set<string>()
}

useEventListener('keydown', (ev) => {
  ev.preventDefault()
  if (ev.code)
    KeyIds.value.add(ev.code)
  else
    KeyIds.value.add(ev.key)
})

const containerRef = ref<HTMLElement>()
const { width } = useElementSize(containerRef)

interface KeyMeta {
  x: number
  y: number
  key: string
  alias?: string
  aliasSup?: string
  aliasSub?: string
  sup?: string
  sub?: string
  description?: string
  disabled?: boolean
  nonStandard?: boolean
  /** @default 12 */
  w?: number
  /** @default 12 */
  h?: number
}

const english = ref(new Map<string, KeyMeta>([
  ['Escape', { x: 0 + 13 * 0, y: 0, key: 'Escape', alias: 'Esc' }],
  ['F1', { x: 13 + 13 * 1, y: 0, key: 'F1' }],
  ['F2', { x: 13 + 13 * 2, y: 0, key: 'F2' }],
  ['F3', { x: 13 + 13 * 3, y: 0, key: 'F3' }],
  ['F4', { x: 13 + 13 * 4, y: 0, key: 'F4' }],
  ['F5', { x: 20 + 13 * 5, y: 0, key: 'F5' }],
  ['F6', { x: 20 + 13 * 6, y: 0, key: 'F6' }],
  ['F7', { x: 20 + 13 * 7, y: 0, key: 'F7' }],
  ['F8', { x: 20 + 13 * 8, y: 0, key: 'F8' }],
  ['F9', { x: 27 + 13 * 9, y: 0, key: 'F9' }],
  ['F10', { x: 27 + 13 * 10, y: 0, key: 'F10' }],
  ['F11', { x: 27 + 13 * 11, y: 0, key: 'F11' }],
  ['F12', { x: 27 + 13 * 12, y: 0, key: 'F12' }],
  ['PrintScreen', { x: 30 + 13 * 13, y: 0, key: 'PrintScreen', alias: 'PrtSc', description: '该按键无法检测', disabled: true }],
  ['ScrollLock', { x: 30 + 13 * 14, y: 0, key: 'ScrollLock', alias: 'Scroll\nlock' }],
  ['Pause', { x: 30 + 13 * 15, y: 0, key: 'Pause' }],
  ['LaunchMediaPlayer', { x: 33 + 13 * 16, y: 0, key: 'LaunchMediaPlayer', alias: '💿', nonStandard: true, description: '非标准按键' }],
  ['LaunchMail', { x: 33 + 13 * 17, y: 0, key: 'LaunchMail', alias: '📧', nonStandard: true, description: '非标准按键' }],
  ['LaunchApplication2', { x: 33 + 13 * 18, y: 0, key: 'LaubchApplication2', alias: '🔢', nonStandard: true, description: '非标准按键' }],
  ['LaunchApplication1', { x: 33 + 13 * 19, y: 0, key: 'LaunchApplication1', alias: '💻', nonStandard: true, description: '非标准按键' }],

  ['Backquote', { x: 13 * 0, y: 15, key: '`', sup: '~' }],
  ['Digit1', { x: 13 * 1, y: 15, key: '1', sup: '!' }],
  ['Digit2', { x: 13 * 2, y: 15, key: '2', sup: '@' }],
  ['Digit3', { x: 13 * 3, y: 15, key: '3', sup: '#' }],
  ['Digit4', { x: 13 * 4, y: 15, key: '4', sup: '$' }],
  ['Digit5', { x: 13 * 5, y: 15, key: '5', sup: '%' }],
  ['Digit6', { x: 13 * 6, y: 15, key: '6', sup: '^' }],
  ['Digit7', { x: 13 * 7, y: 15, key: '7', sup: '&' }],
  ['Digit8', { x: 13 * 8, y: 15, key: '8', sup: '*' }],
  ['Digit9', { x: 13 * 9, y: 15, key: '9', sup: '(' }],
  ['Digit0', { x: 13 * 10, y: 15, key: '0', sup: ')' }],
  ['Minus', { x: 13 * 11, y: 15, key: '-', sup: '_' }],
  ['Equal', { x: 13 * 12, y: 15, key: '=', sup: '+' }],
  ['Backspace', { x: 13 * 13, y: 15, w: 26, key: 'Backspace', alias: '← Backspace' }],
  ['Insert', { x: 17 + 13 * 14, y: 15, key: 'Insert', alias: 'Ins' }],
  ['Home', { x: 17 + 13 * 15, y: 15, key: 'Home' }],
  ['PageUp', { x: 17 + 13 * 16, y: 15, key: 'PageUp', alias: 'PgUp' }],
  ['NumLock', { x: 20 + 13 * 17, y: 15, key: 'NumLock', alias: 'Num\nLock' }],
  ['NumpadDivide', { x: 20 + 13 * 18, y: 15, key: '/' }],
  ['NumpadMultiply', { x: 20 + 13 * 19, y: 15, key: '*' }],
  ['NumpadSubtract', { x: 20 + 13 * 20, y: 15, key: '-' }],

  ['Tab', { x: 0, y: 28, w: 19, key: 'Tab' }],
  ['KeyQ', { x: 20 + 13 * 0, y: 28, key: 'q', alias: 'Q' }],
  ['KeyW', { x: 20 + 13 * 1, y: 28, key: 'w', alias: 'W' }],
  ['KeyE', { x: 20 + 13 * 2, y: 28, key: 'e', alias: 'E' }],
  ['KeyR', { x: 20 + 13 * 3, y: 28, key: 'r', alias: 'R' }],
  ['KeyT', { x: 20 + 13 * 4, y: 28, key: 't', alias: 'T' }],
  ['KeyY', { x: 20 + 13 * 5, y: 28, key: 'y', alias: 'Y' }],
  ['KeyU', { x: 20 + 13 * 6, y: 28, key: 'u', alias: 'U' }],
  ['KeyI', { x: 20 + 13 * 7, y: 28, key: 'i', alias: 'I' }],
  ['KeyO', { x: 20 + 13 * 8, y: 28, key: 'o', alias: 'O' }],
  ['KeyP', { x: 20 + 13 * 9, y: 28, key: 'p', alias: 'P' }],
  ['BracketLeft', { x: 20 + 13 * 10, y: 28, key: '[', sup: '{' }],
  ['BracketRight', { x: 20 + 13 * 11, y: 28, key: ']', sup: '}' }],
  ['Backslash', { x: 20 + 13 * 12, y: 28, w: 19, key: '\\', sup: '|' }],
  ['Delete', { x: 30 + 13 * 13, y: 28, key: 'Delete', alias: 'Del' }],
  ['End', { x: 30 + 13 * 14, y: 28, key: 'End' }],
  ['PageDown', { x: 30 + 13 * 15, y: 28, key: 'PageDown', alias: 'PgDn' }],
  ['Numpad7', { x: 20 + 13 * 17, y: 28, key: '7' }],
  ['Numpad8', { x: 20 + 13 * 18, y: 28, key: '8' }],
  ['Numpad9', { x: 20 + 13 * 19, y: 28, key: '9' }],
  ['NumpadAdd', { x: 20 + 13 * 20, y: 28, h: 25, key: '+' }],

  ['CapsLock', { x: 13 * 0, y: 41, w: 24, key: 'CapsLock' }],
  ['KeyA', { x: 12 + 13 * 1, y: 41, key: 'a', alias: 'A' }],
  ['KeyS', { x: 12 + 13 * 2, y: 41, key: 's', alias: 'S' }],
  ['KeyD', { x: 12 + 13 * 3, y: 41, key: 'd', alias: 'D' }],
  ['KeyF', { x: 12 + 13 * 4, y: 41, key: 'f', alias: 'F' }],
  ['KeyG', { x: 12 + 13 * 5, y: 41, key: 'g', alias: 'G' }],
  ['KeyH', { x: 12 + 13 * 6, y: 41, key: 'h', alias: 'H' }],
  ['KeyJ', { x: 12 + 13 * 7, y: 41, key: 'j', alias: 'J' }],
  ['KeyK', { x: 12 + 13 * 8, y: 41, key: 'k', alias: 'K' }],
  ['KeyL', { x: 12 + 13 * 9, y: 41, key: 'l', alias: 'L' }],
  ['Semicolon', { x: 12 + 13 * 10, y: 41, key: ';', sup: ':' }],
  ['Quote', { x: 12 + 13 * 11, y: 41, key: '\'', sup: '"' }],
  ['Enter', { x: 12 + 13 * 12, y: 41, w: 27, key: 'Enter', alias: '↩️ Enter' }],
  ['Numpad4', { x: 72 + 13 * 13, y: 41, key: '4' }],
  ['Numpad5', { x: 72 + 13 * 14, y: 41, key: '5' }],
  ['Numpad6', { x: 72 + 13 * 15, y: 41, key: '6' }],

  ['ShiftLeft', { x: 13 * 0, y: 54, w: 30, key: 'Shift' }],
  ['KeyZ', { x: 18 + 13 * 1, y: 54, key: 'z', alias: 'Z' }],
  ['KeyX', { x: 18 + 13 * 2, y: 54, key: 'x', alias: 'X' }],
  ['KeyC', { x: 18 + 13 * 3, y: 54, key: 'c', alias: 'C' }],
  ['KeyV', { x: 18 + 13 * 4, y: 54, key: 'v', alias: 'V' }],
  ['KeyB', { x: 18 + 13 * 5, y: 54, key: 'b', alias: 'B' }],
  ['KeyN', { x: 18 + 13 * 6, y: 54, key: 'n', alias: 'N' }],
  ['KeyM', { x: 18 + 13 * 7, y: 54, key: 'm', alias: 'M' }],
  ['Comma', { x: 18 + 13 * 8, y: 54, key: ',', sup: '<' }],
  ['Period', { x: 18 + 13 * 9, y: 54, key: '.', sup: '>' }],
  ['Slash', { x: 18 + 13 * 10, y: 54, key: '/', sup: '?' }],
  ['', { x: 18 + 13 * 11, y: 54, w: 34, key: 'Shift' }],
  ['ArrowUp', { x: 56 + 13 * 12, y: 54, key: 'ArrowUp', alias: '⬆️' }],
  ['Numpad1', { x: 72 + 13 * 13, y: 54, key: '1' }],
  ['Numpad2', { x: 72 + 13 * 14, y: 54, key: '2' }],
  ['Numpad3', { x: 72 + 13 * 15, y: 54, key: '3' }],
  ['NumpadEnter', { x: 20 + 13 * 20, y: 54, h: 25, key: '+' }],

  ['ControlLeft', { x: 17 * 0, y: 67, w: 16, key: 'Control', alias: 'Ctrl' }],
  ['MetaLeft', { x: 17 * 1, y: 67, w: 16, key: 'Meta', alias: '🪟' }],
  ['AltLeft', { x: 17 * 2, y: 67, w: 16, key: 'Alt' }],
  ['Space', { x: 17 * 3, y: 67, w: 76, key: ' ' }],
  ['AltRight', { x: 60 + 17 * 4, y: 67, w: 16, key: 'Alt' }],
  ['MetaRight', { x: 60 + 17 * 5, y: 67, w: 16, key: 'Meta', alias: '🪟' }],
  ['Funtion', { x: 60 + 17 * 6, y: 67, w: 16, key: 'Funtion', alias: 'Fn', description: '该按键无法检测', disabled: true }],
  ['ControlRight', { x: 60 + 17 * 7, y: 67, w: 16, key: 'Control', alias: 'Ctrl' }],
  ['ArrowLeft', { x: 80 + 17 * 7 + 13 * 0, y: 67, key: 'ArrowLeft', alias: '⬅️' }],
  ['ArrowDown', { x: 80 + 17 * 7 + 13 * 1, y: 67, key: 'ArrowDown', alias: '⬇️' }],
  ['ArrowRight', { x: 80 + 17 * 7 + 13 * 2, y: 67, key: 'ArrownRight', alias: '➡️' }],
  ['Numpad0', { x: 72 + 13 * 13, y: 67, w: 25, key: '0', sub: 'Insert', aliasSub: 'Ins' }],
  ['NumpadDecimal', { x: 85 + 13 * 14, y: 67, key: '.', sub: 'Delete', aliasSub: 'Del' }],
]))
</script>

<template>
  <div ref="containerRef" class="h-fit container">
    <div class="mb-2">
      <WinButton @click="reset">
        重置按键记录
      </WinButton>
    </div>

    <div class="keyboard" :style="{ '--c': width }">
      <div
        v-for="[code, options] in english"
        :key="code"
        class="keyboard-item"
        :class="{
          'is-actived': code.length > 0 ? KeyIds.has(code) : KeyIds.has(options.key),
          'is-nonstandard': options.nonStandard,
          'is-undetectable': options.disabled,
        }"
        :title="options.description"
        :style="{
          '--x': options.x,
          '--y': options.y,
          '--w': options.w,
          '--h': options.h,
        }"
      >
        <div v-if="options.sup" class="flex-1 items-start">
          {{ options.aliasSup ?? options.sup }}
        </div>
        <div class="flex-1 flex items-center">
          {{ options.alias ?? options.key }}
        </div>
        <div v-if="options.sub" class="flex-1 items-start">
          {{ options.aliasSub ?? options.sub }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@property --custom-scale {
  syntax: "<number>";
  inherits: false;
  initial-value: 0px;
}

.container {
  container-type: inline-size;
  container-name: container;
}

.keyboard {
  --size: 4;
  --padding: 4;
  --key-radius: 3;
  --box-width: calc(293 * var(--size) + var(--padding));

  box-sizing: content-box;
  position: relative;
  width: calc(var(--box-width) * 1px);
  height: calc((80 * var(--size) + var(--padding)) * 1px);
  font-size: 13px;
  line-height: 1.2;
  border-radius: calc((var(--key-radius) + var(--padding)) * 1px);
  transform-origin: 0 0;
  transition: transform ease 150ms;
  scale: calc(min(var(--box-width), var(--c)) / var(--box-width));

  @apply border border-color-NeutralStroke1;
}

.keyboard-item {
  border-radius: calc(var(--key-radius) * 1px);
  width: calc(var(--w, 12) * var(--size) * 1px);
  height: calc(var(--h, 12) * var(--size) * 1px);
  padding: calc(var(--size) * 1px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  position: absolute;
  left: calc(var(--x) * var(--size) * 1px);
  top: calc(var(--y) * var(--size) * 1px);
  transform: translate(calc(var(--padding) * 1px), calc(var(--padding) * 1px));

  @apply border border-color-NeutralStroke1;

  &:not(.is-actived, .is-nonstandard, .is-undetectable):hover {
    @apply bg-color-NeutralBackground1Hover;
  }

  &:not(.is-actived, .is-nonstandard, .is-undetectable):active {
    @apply bg-color-NeutralBackground1Pressed;
  }

  &.is-actived {
    @apply bg-color-PaletteGreenBackground2;
  }

  &.is-nonstandard {
    @apply bg-color-PaletteYellowBackground2;
  }

  &.is-undetectable {
    @apply bg-color-PaletteRedBackground2;
  }
}
</style>

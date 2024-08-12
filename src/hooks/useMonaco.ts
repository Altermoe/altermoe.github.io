import { editor } from 'monaco-editor'
import { isDark } from '@/shared'

export const useMonaco = (
  containerRef: Ref<HTMLElement | undefined>,
  modelValue: Ref<string> | string,
  options?: editor.IStandaloneEditorConstructionOptions
) => {
  const iEditor = shallowRef<editor.IStandaloneCodeEditor>()

  onMounted(() => {
    const container = toValue(containerRef)
    if (!container) return

    const monaco = editor.create(container, {
      ...options,
      value: toValue(modelValue),
      automaticLayout: true,
      theme: toValue(isDark) ? 'vs-dark' : 'vs',
    })

    const isInternalUpdate = ref(false)

    monaco.onDidChangeModelContent(() => {
      if (!isRef(modelValue)) return
      isInternalUpdate.value = true
      modelValue.value = monaco.getValue()
    })

    watch(isDark, (dark) => monaco.updateOptions({
      theme: dark ? 'vs-dark' : 'vs',
    }))

    isRef(modelValue) && watch(modelValue, (value) => {
      if (isInternalUpdate.value) {
        isInternalUpdate.value = false
        return
      }
      monaco.setValue(value)
    })

    iEditor.value = monaco
  })

  return {
    iEditor,
  }
}

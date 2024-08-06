import type { Plugin } from 'vue'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

export const resourceManager: Plugin = {
  install: async () => {
    // setup monaco-editor envs
    Reflect.set(globalThis, 'MonacoEnvironment', {
      getWorker: async (_: unknown, label: string) => {
        return new ({
          html: HTMLWorker,
          json: JSONWorker,
          javascript: TSWorker,
          typescript: TSWorker,
        }[label] ?? EditorWorker)
      }
    })

    // install fonts
    const fontURLMap = import.meta.glob<boolean, string, string>('./fonts/*.ttf', {
      query: '?url',
      import: 'default',
    })

    await Promise.all(Object.values(fontURLMap).map(async (getURL) => {
      const url = await getURL()
      const family = url.split('/').at(-1)
      if (!family)
        return
      const fontface = new FontFace(family.replace(/(\-[A-Za-z0-9]+)?\..+/, ''), `url(${url})`)
      await fontface.load()
      if (document.fonts)
      document.fonts.add(fontface)
    }))
  },
}

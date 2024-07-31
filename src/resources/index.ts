import type { Plugin } from 'vue'

export const resourceManager: Plugin = {
  install: async () => {
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
      const fontface = new FontFace(family, `url(${url})`)
      await fontface.load()
      if (document.fonts)
      document.fonts.add(fontface)
    }))
  },
}

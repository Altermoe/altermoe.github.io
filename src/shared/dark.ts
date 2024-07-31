export const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
})

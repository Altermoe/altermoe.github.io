import { Application, Graphics } from 'pixi.js'

export const useRender = (canvasRef: Ref<HTMLCanvasElement | undefined>) => {
  onMounted(async () => {
    const canvas = toValue(canvasRef)
    if (!canvas) return

    const app = new Application()

    await app.init({
      canvas,
      preference: 'webgpu',
      resizeTo: window,
      eventMode: 'static',
      backgroundAlpha: 0,
    })

    const obj = new Graphics()
      .circle(0, 0, 32)
      .stroke({
        color: 0xFF0000,
        width: 2,
      })

    app.stage.addChild(obj)

    window.addEventListener('pointermove', (ev) => {

    })
  })

  return {}
}

import type { RouteRecordRaw } from 'vue-router'

const crafts = import.meta.glob('@/pages/crafts/data/*.vue', )

export const getChildren = (parent: string) => Object.entries(crafts).reduce((seed, [path, module]) => {
  const name = path.split('/').at(-1)?.replace('.vue', '') ?? path
  seed.push({
    name,
    path: `${parent}/${encodeURIComponent(name)}`,
    component: module,
  })
  return seed
}, [] as RouteRecordRaw[])

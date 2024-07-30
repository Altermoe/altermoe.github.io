import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '总览',
    component: () => import('@/pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/dev',
    name: '开发者',
    component: () => import('@/pages/development/Development.vue'),
  },
]

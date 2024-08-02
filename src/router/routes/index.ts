import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '总览',
    meta: {
      icon: '',
    },
    component: () => import('@/pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/dev',
    name: '技术栈',
    meta: {
      icon: '',
    },
    component: () => import('@/pages/development/Development.vue'),
  },
]

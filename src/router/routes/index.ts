import type { RouteRecordRaw } from "vue-router";
import { getChildren as getCrafts } from './crafts'

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
    path: '/crafts',
    name: '技巧',
    meta: {
      icon: '',
    },
    component: () => import('@/pages/crafts/Crafts.vue'),
    children: getCrafts('/crafts'),
  },
  {
    path: '/webrtc',
    name: 'WebRTC',
    meta: {
      icon: '',
    },
    component: () => import('@/pages/webrtc/WebRTC.vue'),
  },
  {
    path: '/dev',
    name: '技术栈',
    meta: {
      icon: '',
    },
    component: () => import('@/pages/development/Development.vue'),
  },
]

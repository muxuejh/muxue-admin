import { RouteRecordRaw } from 'vue-router'

export const asyncRoute: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: { hiddenOfSubMenu: true },
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'home-filled' }
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/layout/index.vue'),
    redirect: '/table/baseTable',
    meta: { title: '表格', icon: 'user' },
    children: [
      {
        path: '/table/baseTable',
        name: 'baseTable',
        component: () => import('@/views/table/baseTable/index.vue'),
        meta: { title: '基础表格', icon: 'menu', keepAlive: true }
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/layout/index.vue'),
    redirect: '/auth/menu',
    meta: { title: '权限管理', icon: 'setting' },
    children: [
      {
        path: '/auth/menu',
        name: 'menu',
        component: () => import('@/views/auth/menu/index.vue'),
        meta: { title: '菜单权限', icon: 'menu' }
      },
      {
        path: '/auth/button',
        name: 'button',
        component: () => import('@/views/auth/button/index.vue'),
        meta: { title: '按钮权限', icon: 'menu' }
      }
    ]
  }
]

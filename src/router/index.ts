import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './modules/constantRoute'
import { asyncRoute } from './modules/asyncRoute'

// 将路由对象、参数和返回值都定义为具体类型
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    hiddenOfSubMenu?: boolean
    hidden?: boolean
    keepAlive?: boolean
  }
}

const routes = [...constantRoute, ...asyncRoute]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router

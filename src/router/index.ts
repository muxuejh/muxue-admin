import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './modules/constantRoute'
import { asyncRoute } from './modules/asyncRoute'

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

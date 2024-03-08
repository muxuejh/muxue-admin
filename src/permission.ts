import router from '@/router'
import NProgress from '@/config/nprogress'
import { LOGIN_URL, ROUTER_WHITE_LIST, TOKEN_TIME_VALUE } from '@/config'
import useUserStore from '@/store/modules/user'
import { localCache } from './utils/storage'
import { LOGIN_TIME, LOGIN_TOKEN } from '@/global/constants'

router.beforeEach((to, form, next) => {
  const userStore = useUserStore()

  // 1.NProgress 开始
  NProgress.start()

  // 2.动态设置网页标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title

  // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
  if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    if (localCache.getStorage(LOGIN_TOKEN)) return next(form.fullPath)
    return next()
  }

  // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
  if (ROUTER_WHITE_LIST.includes(to.path)) return next()

  // 5.判断是否有 Token，没有重定向到 login 页面
  if (!localCache.getStorage(LOGIN_TOKEN)) return next({ path: LOGIN_URL, replace: true })

  // 6.Token 是否过期
  if (diffTokenTime()) return userStore.logout()

  // 7.正常访问页面
  next()
})

router.onError(error => {
  NProgress.done()
  console.warn('路由错误', error.message)
})

router.afterEach(() => {
  NProgress.done()
})

/**
 * @description 判断 token 是否过期
 * @returns boolean
 */
function diffTokenTime() {
  const currentTime = Date.now()
  const tokenTime = localCache.getStorage(LOGIN_TIME)
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}

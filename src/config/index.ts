// ? 全局默认配置项

// 登录页地址（默认）
export const LOGIN_URL = '/login'

// 路由白名单地址（必须是本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ['/table/baseTable']

// token 过期时间
export const TOKEN_TIME_VALUE = 2 * 60 * 60 * 1000

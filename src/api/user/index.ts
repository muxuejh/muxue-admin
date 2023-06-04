//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type { LoginFormData, LoginResponseData, UserInfoResponseData } from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

//登录接口
export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

//获取用户信息
export const reqUserInfo = () => request.get<any, UserInfoResponseData>(API.USERINFO_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

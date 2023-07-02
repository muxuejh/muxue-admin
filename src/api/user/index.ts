import Http from '@/api'
import type { Login } from './type'

//登录
export const reqLogin = (data: Login.ReqLogin) => Http.post<Login.ResLogin>('/user/login', data)

//获取用户信息
export const reqUserInfo = () => Http.get<Login.ResUserInfo>('/user/info')

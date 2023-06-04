import { LOGIN_TOKEN } from '@/global/constants'
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { LoginFormData } from '@/api/user/type'
import { IUserState } from '../types'
import { localCache } from '@/utils/storage'
const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: localCache.getStorage(LOGIN_TOKEN) ?? ''
    }
  },
  actions: {
    async login(data: LoginFormData) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        localCache.setStorage(LOGIN_TOKEN, this.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message) as Error)
      }
    }
  },
  getters: {}
})

export default useUserStore

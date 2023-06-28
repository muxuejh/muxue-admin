import { LOGIN_TOKEN, LOGIN_TIME } from '@/global/constants'
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { LoginFormData } from '@/api/user/type'
import { IUserState } from '../types'
import { localCache } from '@/utils/storage'
import router from '@/router'

const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: localCache.getStorage(LOGIN_TOKEN) ?? '',
      userInfo: localCache.getStorage('userInfo') ?? {}
    }
  },
  actions: {
    async login(data: LoginFormData) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        // this.username = res.data.username
        localCache.setStorage(LOGIN_TOKEN, this.token)
        localCache.setStorage('userInfo', { username: res.data.username, avatar: res.data.avatar })
        localCache.setStorage(LOGIN_TIME, res.data.tokenTime)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message) as Error)
      }
    },
    logout() {
      localCache.clearStorage()
      router.replace('/login')
    }
  },
  getters: {}
})

export default useUserStore

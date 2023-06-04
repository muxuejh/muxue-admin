import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { LoginFormData } from '@/api/user/type'
import { IUserState } from '../types'

const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: localStorage.getItem('TOKEN') ?? ''
    }
  },
  actions: {
    async login(data: LoginFormData) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        localStorage.setItem('TOKEN', this.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message) as Error)
      }
    }
  },
  getters: {}
})

export default useUserStore

import { defineStore } from 'pinia'
import { GlobalState } from '../types/index'
import { localCache } from '@/utils/storage'

const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    // 折叠菜单
    isCollapse: JSON.parse(localCache.getStorage('isCollapse')) ?? false
  }),
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
      localCache.setStorage('isCollapse', this.isCollapse)
    }
  },
  getters: {}
})

export default useGlobalStore

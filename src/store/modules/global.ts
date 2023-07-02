import { defineStore } from 'pinia'
import { GlobalState } from '../interface'
import { localCache } from '@/utils/storage'

const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    // 折叠菜单
    isCollapse: JSON.parse(localCache.getStorage('isCollapse')) ?? false,
    // 控制刷新效果
    isRefresh: false
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

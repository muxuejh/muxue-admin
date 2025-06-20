import { defineStore } from 'pinia'
import { GlobalState } from '../interface'
import { localCache } from '@/utils/storage'

const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    // 折叠菜单
    isCollapse: JSON.parse(localCache.getStorage('isCollapse')) ?? false,
    // 控制刷新效果
    refreshKey: 0
  }),
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
      localCache.setStorage('isCollapse', this.isCollapse)
    },
    triggerRefresh() {
      this.refreshKey++ // 每次递增确保刷新
    }
  },
  getters: {}
})

export default useGlobalStore

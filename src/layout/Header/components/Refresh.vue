<template>
  <div class="refresh" @click="handleRefresh">
    <el-icon :size="18"><Refresh /></el-icon>
  </div>
</template>

<script setup lang="ts">
import useGlobalStore from '@/store/modules/global'

const globalStore = useGlobalStore()

const handleRefresh = () => {
  // 触发key值变化，实现刷新
  globalStore.triggerRefresh()
}
</script>

<style scoped lang="scss"></style>

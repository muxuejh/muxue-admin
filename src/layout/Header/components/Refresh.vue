<template>
  <div class="refresh" @click="handleRefresh">
    <el-icon :size="18"><Refresh /></el-icon>
  </div>
</template>

<script setup lang="ts">
import useGlobalStore from '@/store/modules/global'

const globalStore = useGlobalStore()

const handleRefresh = () => {
  globalStore.isRefresh = !globalStore.isRefresh
}
</script>

<style scoped lang="scss"></style>

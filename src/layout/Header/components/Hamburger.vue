<template>
  <div id="hamburger" class="hamburger-container" @click="handleClick">
    <el-icon>
      <component :is="isCollapse ? 'expand' : 'fold'"></component>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useGlobalStore from '@/store/modules/global'

const globalStore = useGlobalStore()

const handleClick = () => globalStore.setCollapse()
const isCollapse = computed(() => globalStore.isCollapse)
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  margin-top: 2px;
  cursor: pointer;
}
</style>

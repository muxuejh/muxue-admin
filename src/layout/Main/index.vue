<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="`${route.fullPath}-${globalStore.refreshKey}`" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import useGlobalStore from '@/store/modules/global'

const globalStore = useGlobalStore()
</script>

<style scoped>
.fade-transform-enter-from {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(-30px);
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}
.fade-transform-leave-to {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(30px);
}
</style>

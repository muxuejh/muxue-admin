<template>
  <Logo :isCollapse="isCollapse" />
  <el-menu
    active-text-color="#fff"
    text-color="#bdbdc0"
    background-color="#191a20"
    class="el-menu-vertical-demo"
    :default-active="activeMenu"
    unique-opened
    router
    :collapse="isCollapse"
  >
    <SubItem :menuList="routes" />
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SubItem from './components/SubItem.vue'
import Logo from './components/Logo.vue'
import useGlobalStore from '@/store/modules/global'

const router = useRouter()
const routes = computed(() => {
  return router.options.routes
    .filter(item => {
      return !item.meta?.hidden
    })
    .map(item => {
      if (item?.children?.length && item.meta?.hiddenOfSubMenu) {
        item = item.children[0]
      }
      return item
    })
})

const route = useRoute()
const activeMenu = computed(() => route.path)

const globalStore = useGlobalStore()
const isCollapse = computed(() => globalStore.isCollapse)
</script>

<style lang="scss" scoped></style>

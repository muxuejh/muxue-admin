<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.meta?.icon"></component>
        </el-icon>
        <span>{{ menu.meta?.title }}</span>
      </template>
      <SubItem :menuList="menu.children" />
    </el-sub-menu>

    <el-menu-item v-else :index="menu.path">
      <el-icon>
        <component :is="menu.meta?.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ menu.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

defineProps<{ menuList: RouteRecordRaw[] }>()
</script>

<style lang="scss" scoped>
.el-menu {
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  border-right: none;

  // 选中后的样式
  .el-menu-item {
    &.is-active {
      background-color: #060708 !important;
    }
    &.is-active::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 4px;
      background: $primary-color;
      content: '';
    }
  }
}
// 设置菜单折叠时的样式
.el-menu--popup {
  .el-menu-item {
    background-color: #191a20;
    i {
      margin-right: 5px;
    }
    &:hover {
      i,
      span {
        color: #ffffff !important;
      }
    }
    &.is-active {
      background-color: #060708 !important;
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 4px;
        background: $primary-color;
        content: '';
      }
      i,
      span {
        color: #ffffff !important;
      }
    }
  }
}
</style>

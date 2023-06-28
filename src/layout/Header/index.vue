<template>
  <div class="navbar">
    <Hamburger />
    <Breadcrumb />
    <div class="navbar-right">
      <Refresh class="navbar-item" />
      <screenFull class="navbar-item" />
      <span class="username">{{ username }}</span>
      <Avatar class="navbar-item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Refresh from './components/Refresh.vue'
import screenFull from './components/screenFull.vue'
import Avatar from './components/Avatar.vue'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const username = computed(() => userStore.userInfo.username)
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 30px;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    :deep(.navbar-item) {
      display: inline-block;
      margin-left: 20px;
      cursor: pointer;
    }
    .username {
      margin-left: 20px;
      font-size: 15px;
      vertical-align: middle;
      padding-bottom: 3px;
    }
  }
}
</style>

<template>
  <el-container class="app-wrapper">
    <el-aside
      class="sidebar-container"
      :style="{ width: globalStore.isCollapse ? '65px' : '220px' }"
    >
      <Menu />
    </el-aside>
    <el-container class="container" :class="{ hiddenContainer: globalStore.isCollapse }">
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <section class="main-box">
          <Main />
        </section>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Main from './Main/index.vue'
import Footer from './Footer/index.vue'
import useGlobalStore from '@/store/modules/global'

const globalStore = useGlobalStore()
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hiddenContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
:deep(.el-header) {
  height: auto;
  padding: 0;
}
:deep(.el-footer) {
  height: auto;
  padding: 0;
}

.el-main {
  box-sizing: border-box;
  padding: 10px 13px;
  // 防止切换出现横向滚动条
  overflow-x: hidden;
  background: #f0f2f5;
  .main-box {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
    overflow-x: hidden !important;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    &::-webkit-scrollbar {
      background-color: white;
    }
  }
}
</style>

<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-avatar :size="40" :src="avatarUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { computed } from 'vue'
import useUserStore from '@/store/modules/user'

const avatarUrl = computed(() => userStore.userInfo.avatar)

const userStore = useUserStore()
const logout = () => {
  ElMessageBox.confirm('确定退出登录吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      userStore.logout()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '😊😊😊😊😊😊'
      })
    })
}
</script>

<style lang="scss" scoped>
:deep(.el-dropdown-menu__item) {
  white-space: nowrap;
}
</style>

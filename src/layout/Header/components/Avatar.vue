<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="avatarUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'

const avatarUrl = ref(
  'https://ts1.cn.mm.bing.net/th?id=OIP-C.ZaMvIRseijoVQNlpU2GABQAAAA&w=99&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
)

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

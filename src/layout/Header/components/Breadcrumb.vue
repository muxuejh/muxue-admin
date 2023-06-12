<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="item.path">
      <div class="breadcrumb">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = computed(() => {
  return route.matched.filter(item => item.meta.title)
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}
</style>

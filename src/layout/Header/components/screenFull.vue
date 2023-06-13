<template>
  <div id="screenFul" @click="toggle">
    <el-tooltip content="全屏" placement="bottom" effect="dark">
      <span>
        <SvgIcon :name="isFullscreen ? 'suoxiao' : 'fangda'" />
      </span>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()
</script>

<style lang="scss" scoped></style>

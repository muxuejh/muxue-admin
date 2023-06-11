<template>
  <div class="logo flx-center">
    <img src="@/assets/images/logo.png" alt="logo" />
    <span v-show="!isCollapse">muxue-admin</span>
  </div>
</template>

<script setup lang="ts">
defineProps(['isCollapse'])
</script>

<style lang="scss" scoped>
.logo {
  background-color: #191a20;
  height: 55px;
  border-bottom: 2px solid #1d1e26;
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  box-sizing: border-box;
  span {
    font-size: 22px;
    font-weight: bold;
    color: #dadada;
    white-space: nowrap;
  }
  img {
    width: 30px;
    object-fit: contain;
    margin-right: 8px;
  }
}
</style>

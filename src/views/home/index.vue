<template>
  <div class="home flx-center">
    <img class="home-bg" src="@/assets/images/welcome.png" alt="welcome" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.flx-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  width: 100%;
  height: 100%;
  .home-bg {
    width: 80%;
    margin-bottom: 25px;
  }
}
</style>

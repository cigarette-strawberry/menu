<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Menu = defineAsyncComponent({
  loader: () => import('@/layout/MenuTwo.vue'),
  delay: 200
});

const asideWidth = ref('200px');

const onCollapse = (isCollapse: boolean) => {
  asideWidth.value = isCollapse ? '64px' : '200px';
};
</script>

<template>
  <el-container class="container">
    <el-header height="82px" style="padding: 0"><Menu @collapse="onCollapse" /></el-header>
    <el-main style="background-color: #f0f2f5">Main</el-main>
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
}
</style>

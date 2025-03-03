<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Menu = defineAsyncComponent({
  loader: () => import('@/layout/Menu.vue'),
  delay: 200
});

const asideWidth = ref('200px');

const onCollapse = (isCollapse: boolean) => {
  asideWidth.value = isCollapse ? '64px' : '200px';
};
</script>

<template>
  <el-container class="container">
    <el-aside :width="asideWidth">
      <Menu @collapse="onCollapse" />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
}
</style>

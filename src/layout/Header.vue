<script setup lang="ts">
defineOptions({
  name: ''
});

const Tabs = defineAsyncComponent({
  loader: () => import('@/layout/Tabs.vue'),
  delay: 200
});
</script>

<template>
  <div class="header">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <Tabs />
  </div>
</template>

<style scoped>
.header {
  height: 100%;
}

.breadcrumb {
  height: 48px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 20px;
}
</style>

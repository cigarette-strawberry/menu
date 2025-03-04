<script setup lang="ts">
defineOptions({
  name: ''
});

const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
]);
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

    <el-tabs v-model="editableTabsValue" class="tabs">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name" />
    </el-tabs>
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

.tabs {
  height: 34px;
  box-shadow: 0 0 1px #888;
  padding-left: 20px;
}

.tabs >>> .el-tabs__header {
  height: 34px !important;
  margin: 0;
}
</style>

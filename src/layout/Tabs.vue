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
  <div>
    <el-tabs v-model="editableTabsValue" class="tabs">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name" />
    </el-tabs>
  </div>
</template>

<style scoped>
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

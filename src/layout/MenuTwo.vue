<script setup lang="ts">
import { Location, Menu, Document, Setting, Expand, Fold } from '@element-plus/icons-vue';
defineOptions({
  name: ''
});

const Tabs = defineAsyncComponent({
  loader: () => import('@/layout/Tabs.vue'),
  delay: 200
});

const isCollapse = ref(false);

const emits = defineEmits<{
  (e: 'collapse', value: boolean): void;
}>();

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emits('collapse', isCollapse.value);
};
</script>

<template>
  <div style="display: flex">
    <div class="title">logo</div>
    <el-menu :collapse="isCollapse" mode="horizontal" default-active="2" background-color="#fff" text-color="#000" class="el-menu-vertical">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><Document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div><Tabs /></div>
</template>

<style scoped>
.el-menu-vertical {
  height: 48px;
}

.title {
  width: 199px;
  height: 48px;
  line-height: 48px;
  border-right: 1px solid #f0f0f0;
}
</style>

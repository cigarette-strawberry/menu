<script setup lang="ts">
import { Location, Menu, Document, Setting, Expand, Fold } from '@element-plus/icons-vue';
defineOptions({
  name: ''
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
  <div>
    <div class="title">cigarette</div>
    <el-menu :collapse="isCollapse" default-active="2" active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" class="el-menu-vertical">
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
    <div class="collapse">
      <el-tooltip :content="isCollapse ? '点击展开' : '点击折叠'" placement="right">
        <el-icon @click="handleCollapse" class="box-item"><Expand v-if="isCollapse" /><Fold v-else /></el-icon>
      </el-tooltip>
    </div>
  </div>
</template>

<style scoped>
.el-menu-vertical {
  height: calc(100vh - 60px - 40px);
}

.title {
  height: 60px;
  line-height: 60px;
}

.collapse {
  height: 40px;
  line-height: 40px;
}

.box-item {
  cursor: pointer;
  margin-left: 15px;
}
</style>

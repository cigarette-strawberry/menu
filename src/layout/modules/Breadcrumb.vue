<script setup lang="ts">
defineOptions({
  name: ''
});

import { useThemeStore } from '@/stores/modules/theme';
const themeStore = useThemeStore();
</script>

<template>
  <ElBreadcrumb v-if="themeStore.header.breadcrumb.visible">
    <ElBreadcrumbItem :to="{ path: '/' }">homepage</ElBreadcrumbItem>
    <ElBreadcrumbItem>
      <ElDropdown>
        <p>Dropdown List</p>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem> Action 1 </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ElBreadcrumbItem>
  </ElBreadcrumb>
</template>

<style lang="scss" scoped></style>

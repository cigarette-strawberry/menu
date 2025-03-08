<script setup lang="ts">
import type { RouteKey } from '@elegant-router/types';
import { GLOBAL_HEADER_MENU_ID } from '@/constants/app.ts';
import { useRouteStore } from '@/stores/modules/route';
import MenuItem from '../components/menu-item.vue';

defineOptions({ name: 'HorizontalMenu' });

const routeStore = useRouteStore();
</script>

<template>
  <Teleport :to="`#${GLOBAL_HEADER_MENU_ID}`">
    <ElMenu ellipsis class="w-full" mode="horizontal">
      <MenuItem v-for="item in routeStore.menus" :key="item.key" :item="item" :index="item.key" />
    </ElMenu>
  </Teleport>
</template>

<style scoped></style>

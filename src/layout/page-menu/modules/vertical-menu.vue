<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/modules/app';
import { useRouteStore } from '@/stores/modules/route';
import { GLOBAL_SIDER_MENU_ID } from '@/constants/app.ts';
import MenuItem from '../components/menu-item.vue';

defineOptions({ name: 'VerticalMenu' });

const route = useRoute();
const appStore = useAppStore();
const routeStore = useRouteStore();
</script>

<template>
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <div>
      <ElMenu mode="vertical">
        <MenuItem v-for="item in routeStore.menus" :key="item.key" :item="item" :index="item.key" />
      </ElMenu>
    </div>
  </Teleport>
</template>

<style scoped></style>

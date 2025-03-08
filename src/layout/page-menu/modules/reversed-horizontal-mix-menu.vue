<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteKey } from '@elegant-router/types';
import { GLOBAL_HEADER_MENU_ID, GLOBAL_SIDER_MENU_ID } from '@/constants/app.ts';
import { useAppStore } from '@/stores/modules/app';
import { useRouteStore } from '@/stores/modules/route';
import MenuItem from '../components/menu-item.vue';

defineOptions({ name: 'ReversedHorizontalMixMenu' });

const route = useRoute();
const appStore = useAppStore();
// const themeStore = useThemeStore();
const routeStore = useRouteStore();

const expandedKeys = ref<string[]>([]);

const activeFirstLevelMenuKey = ref('');

const firstLevelMenus = computed<App.Global.Menu[]>(() =>
  routeStore.menus.map(menu => {
    const { children: _, ...rest } = menu;

    return rest;
  })
);

const childLevelMenus = computed<App.Global.Menu[]>(() => routeStore.menus.find(menu => menu.key === activeFirstLevelMenuKey.value)?.children || []);
</script>

<template>
  <Teleport :to="`#${GLOBAL_HEADER_MENU_ID}`">
    <ElMenu ellipsis class="w-full" mode="horizontal">
      <MenuItem v-for="item in firstLevelMenus" :key="item.key" :item="item" :index="item.key" />
    </ElMenu>
  </Teleport>
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <SimpleScrollbar>
      <ElMenu mode="vertical">
        <MenuItem v-for="item in childLevelMenus" :key="item.key" :item="item" :index="item.key" />
      </ElMenu>
    </SimpleScrollbar>
  </Teleport>
</template>

<style scoped></style>

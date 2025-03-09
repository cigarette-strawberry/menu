<script setup lang="ts">
import type { RouteKey } from '@elegant-router/types';
import { GLOBAL_HEADER_MENU_ID, GLOBAL_SIDER_MENU_ID } from '@/constants/app.ts';
import { useAppStore } from '@/stores/modules/app';
import { useThemeStore } from '@/stores/modules/theme';
import { useRouteStore } from '@/stores/modules/route';
import FirstLevelMenu from '../components/first-level-menu.vue';
import MenuItem from '../components/menu-item.vue';
import { computed, ref } from 'vue';

defineOptions({
  name: 'HorizontalMixMenu'
});

const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();

const activeFirstLevelMenuKey = ref('');

function handleSelectMixMenu(menu: App.Global.Menu) {
  activeFirstLevelMenuKey.value = menu.key;
}

const childLevelMenus = computed<App.Global.Menu[]>(() => routeStore.menus.find(menu => menu.key === activeFirstLevelMenuKey.value)?.children || []);

const allMenus = computed<App.Global.Menu[]>(() => routeStore.menus);
</script>

<template>
  <Teleport :to="`#${GLOBAL_HEADER_MENU_ID}`">
    <ElMenu ellipsis class="w-full" mode="horizontal">
      <MenuItem v-for="item in childLevelMenus" :key="item.key" :item="item" :index="item.key" />
    </ElMenu>
  </Teleport>
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <FirstLevelMenu
      :menus="allMenus"
      @select="handleSelectMixMenu"
      :active-menu-key="activeFirstLevelMenuKey"
      :dark-mode="themeStore.darkMode"
      :theme-color="themeStore.themeColor" />
  </Teleport>
</template>

<style scoped></style>

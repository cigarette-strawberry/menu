<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteKey } from '@elegant-router/types';
import { useAppStore } from '@/stores/modules/app';
import { useThemeStore } from '@/stores/modules/theme';
import { useRouteStore } from '@/stores/modules/route';
import { GLOBAL_SIDER_MENU_ID } from '@/constants/app.ts';
import FirstLevelMenu from '../components/first-level-menu.vue';
import GlobalLogo from '@/layout/modules/Logo.vue';
import MenuItem from '../components/menu-item.vue';

defineOptions({
  name: 'VerticalMixMenu'
});

const route = useRoute();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();

const inverted = computed(() => !themeStore.darkMode && themeStore.sider.inverted);

const activeFirstLevelMenuKey = ref('');

const childLevelMenus = computed<App.Global.Menu[]>(() => routeStore.menus.find(menu => menu.key === activeFirstLevelMenuKey.value)?.children || []);

const hasChildMenus = computed(() => childLevelMenus.value.length > 0);

const showDrawer = computed(() => hasChildMenus.value);

const expandedKeys = ref<string[]>([]);

const allMenus = computed<App.Global.Menu[]>(() => routeStore.menus);
</script>

<template>
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <div class="h-full flex">
      <FirstLevelMenu
        :menus="allMenus"
        :active-menu-key="activeFirstLevelMenuKey"
        :inverted="inverted"
        :dark-mode="themeStore.darkMode"
        :theme-color="themeStore.themeColor">
        <GlobalLogo :show-title="false" :style="{ height: themeStore.header.height + 'px' }" />
      </FirstLevelMenu>
      <div class="relative h-full transition-width-300" :style="{ width: hasChildMenus ? themeStore.sider.mixChildMenuWidth + 'px' : '0px' }">
        <DarkModeContainer
          class="absolute-lt h-full flex-col-stretch nowrap-hidden shadow-sm transition-all-300"
          :inverted="inverted"
          :style="{ width: showDrawer ? themeStore.sider.mixChildMenuWidth + 'px' : '0px' }">
          <header class="flex-y-center justify-between px-12px" :style="{ height: themeStore.header.height + 'px' }">
            <h2 class="text-16px text-primary font-bold">Logo</h2>
          </header>
          <SimpleScrollbar>
            <ElMenu mode="vertical">
              <MenuItem v-for="item in childLevelMenus" :key="item.key" :item="item" :index="item.key" />
            </ElMenu>
          </SimpleScrollbar>
        </DarkModeContainer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>

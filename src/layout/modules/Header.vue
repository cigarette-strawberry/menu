<script setup lang="ts">
defineOptions({
  name: ''
});
import { useThemeStore } from '@/stores/modules/theme';
import { GLOBAL_HEADER_MENU_ID } from '@/constants/app.ts';
import Logo from '@/layout/modules/Logo.vue';
import Breadcrumb from '@/layout/modules/Breadcrumb.vue';

interface Props {
  /** Whether to show the logo */
  showLogo?: App.Global.HeaderProps['showLogo'];
  /** Whether to show the menu toggler */
  showMenuToggler?: App.Global.HeaderProps['showMenuToggler'];
  /** Whether to show the menu */
  showMenu?: App.Global.HeaderProps['showMenu'];
}

defineProps<Props>();

const themeStore = useThemeStore();
</script>

<template>
  <div class="layout-Header">
    <Logo v-if="showLogo" class="layout-Logo" :style="{ width: themeStore.sider.width + 'px' }" />
    <div v-if="showMenu" :id="GLOBAL_HEADER_MENU_ID" class="layout-Header __GLOBAL_HEADER_MENU__"></div>
    <div v-else class="layout-Header __GLOBAL_HEADER_MENU__">
      <Breadcrumb class="layout-Breadcrumb" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-Header {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
}

.layout-Logo {
  height: 100%;
}

.__GLOBAL_HEADER_MENU__ {
  height: 100%;
  overflow: hidden;
  flex: 1;

  .layout-Breadcrumb {
    margin-left: 12px;
  }
}
</style>

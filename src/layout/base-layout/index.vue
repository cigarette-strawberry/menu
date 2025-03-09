<script setup lang="ts">
defineOptions({
  name: ''
});
import { computed, defineAsyncComponent } from 'vue';
import AdminLayout from '@/layout/admin-layout/index.vue';
import Header from '@/layout/modules/Header.vue';
import Tab from '@/layout/modules/Tab.vue';
import Sider from '@/layout/modules/Sider.vue';
import Footer from '@/layout/modules/Footer.vue';
import Content from '@/layout/modules/Content.vue';
import Drawer from '@/layout/modules/Drawer.vue';
import { useThemeStore } from '@/stores/modules/theme';

const Menu = defineAsyncComponent(() => import('@/layout/modules/Menu.vue'));

const themeStore = useThemeStore();

const headerProps = computed(() => {
  const { mode, reverseHorizontalMix } = themeStore.layout;

  type ThemeLayoutMode = 'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix';

  const headerPropsConfig: Record<ThemeLayoutMode, App.Global.HeaderProps> = {
    vertical: {
      showLogo: false,
      showMenu: false,
      showMenuToggler: true
    },
    'vertical-mix': {
      showLogo: false,
      showMenu: false,
      showMenuToggler: false
    },
    horizontal: {
      showLogo: true,
      showMenu: true,
      showMenuToggler: false
    },
    'horizontal-mix': {
      showLogo: true,
      showMenu: true,
      showMenuToggler: reverseHorizontalMix
    }
  };

  return headerPropsConfig[mode as ThemeLayoutMode];
});
</script>

<template>
  <div>
    <AdminLayout>
      <template #header>
        <Header v-bind="headerProps" />
      </template>

      <template #tab>
        <Tab />
      </template>

      <template #sider>
        <Sider />
      </template>

      <Menu />
      <Content />
      <!-- <Drawer /> -->

      <template #footer>
        <Footer />
      </template>
    </AdminLayout>
  </div>
</template>

<style lang="scss" scoped></style>

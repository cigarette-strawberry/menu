<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { useAppStore } from '@/stores/modules/app';
import { useThemeStore } from '@/stores/modules/theme';
import VerticalMenu from '@/layout/page-menu/modules/vertical-menu.vue';
import VerticalMixMenu from '@/layout/page-menu/modules/vertical-mix-menu.vue';
import HorizontalMenu from '@/layout/page-menu/modules/horizontal-menu.vue';
import HorizontalMixMenu from '@/layout/page-menu/modules/horizontal-mix-menu.vue';
import ReversedHorizontalMixMenu from '@/layout/page-menu/modules/reversed-horizontal-mix-menu.vue';

defineOptions({
  name: 'GlobalMenu'
});

const appStore = useAppStore();
const themeStore = useThemeStore();

const activeMenu = computed(() => {
  const menuMap: Record<'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix', Component> = {
    vertical: VerticalMenu,
    'vertical-mix': VerticalMixMenu,
    horizontal: HorizontalMenu,
    'horizontal-mix': themeStore.layout.reverseHorizontalMix ? ReversedHorizontalMixMenu : HorizontalMixMenu
  };

  return menuMap[themeStore.layout.mode as 'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix'];
});

const reRenderVertical = computed(() => themeStore.layout.mode === 'vertical');
</script>

<template>
  <component :is="activeMenu" :key="reRenderVertical" />
</template>

<style scoped></style>

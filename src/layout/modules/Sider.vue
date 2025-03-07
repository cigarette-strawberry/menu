<script setup lang="ts">
defineOptions({
  name: ''
});
import Logo from '@/layout/modules/Logo.vue';
import { useThemeStore } from '@/stores/modules/theme';
import { computed } from 'vue';
const themeStore = useThemeStore();

const isVerticalMix = computed(() => themeStore.layout.mode === 'vertical-mix');
const isHorizontalMix = computed(() => themeStore.layout.mode === 'horizontal-mix');
const darkMenu = computed(() => !themeStore.darkMode && !isHorizontalMix.value && themeStore.sider.inverted);
const showLogo = computed(() => !isVerticalMix.value && !isHorizontalMix.value);
const menuWrapperClass = computed(() => (showLogo.value ? 'flex-1-hidden' : 'h-full'));
</script>

<template>
  <div>
    <Logo v-if="true" :show-title="true" :style="{ height: themeStore.header.height + 'px' }" />
    <div id="__GLOBAL_SIDER_MENU__"></div>
  </div>
</template>

<style lang="scss" scoped></style>

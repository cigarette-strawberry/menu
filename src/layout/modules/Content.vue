<script setup lang="ts">
defineOptions({
  name: ''
});
import { useThemeStore } from '@/stores/modules/theme';
import type { Placement } from 'element-plus';

const themeStore = useThemeStore();

function handleChangeMode(mode: ThemeLayoutMode) {
  themeStore.layout.mode = mode;
}

type ThemeLayoutMode = 'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix';

type LayoutConfig = Record<
  ThemeLayoutMode,
  {
    placement: Placement;
    headerClass: string;
    menuClass: string;
    mainClass: string;
  }
>;

const layoutConfig: LayoutConfig = {
  vertical: {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-1/3 h-full',
    mainClass: 'w-2/3 h-3/4'
  },
  'vertical-mix': {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-1/4 h-full',
    mainClass: 'w-2/3 h-3/4'
  },
  horizontal: {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-full h-1/4',
    mainClass: 'w-full h-3/4'
  },
  'horizontal-mix': {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-full h-1/4',
    mainClass: 'w-2/3 h-3/4'
  }
};

const themeLayoutModeRecord = {
  vertical: '左侧菜单布局',
  'vertical-mix': '左侧菜单混合布局',
  horizontal: '顶部菜单模式',
  'horizontal-mix': '顶部菜单混合模式'
};
</script>

<template>
  <div>
    <ElDivider>布局模式</ElDivider>
    <div class="layout-mode">
      <div
        v-for="(item, key) in layoutConfig"
        :key="key"
        class="layout-config"
        :class="[themeStore.layout.mode === key ? 'border-primary' : 'border-transparent']"
        @click="handleChangeMode(key)">
        <ElTooltip :placement="item.placement">
          <template #content>
            {{ themeLayoutModeRecord[key] }}
          </template>
          <div v-if="key === 'vertical'" class="mode" :class="[key.includes('vertical') ? 'flex' : 'flex-col']">
            <div class="layout-sider h-full w-18px"></div>
            <div class="vertical-wrapper">
              <div class="layout-header"></div>
              <div class="layout-main"></div>
            </div>
          </div>
          <div v-if="key === 'vertical-mix'" class="mode" :class="[key.includes('vertical') ? 'flex' : 'flex-col']">
            <div class="layout-sider h-full w-8px"></div>
            <div class="layout-sider h-full w-16px"></div>
            <div class="vertical-wrapper">
              <div class="layout-header"></div>
              <div class="layout-main"></div>
            </div>
          </div>
          <div v-if="key === 'horizontal'" class="mode" :class="[key.includes('vertical') ? 'flex' : 'flex-col']">
            <div class="layout-header"></div>
            <div class="horizontal-wrapper">
              <div class="layout-main"></div>
            </div>
          </div>
          <div v-if="key === 'horizontal-mix'" class="mode" :class="[key.includes('vertical') ? 'flex' : 'flex-col']">
            <div class="layout-header"></div>
            <div class="horizontal-wrapper">
              <div class="layout-sider w-18px"></div>
              <div class="layout-main"></div>
            </div>
          </div>
        </ElTooltip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-mode {
  row-gap: 16px;
  column-gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .layout-config {
    display: flex;
    cursor: pointer;
    border-radius: 6px;
    border-color: rgb(100 108 255);
    border-width: 2px;

    .mode {
      padding: 6px;
      border-radius: 4px;
      gap: 6px;
      display: flex;
      width: 96px;
      height: 64px;
    }
  }
}

.h-full {
  height: 100%;
}

.w-18px {
  width: 18px;
}

.w-8px {
  width: 8px;
}

.w-16px {
  width: 16px;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.layout-header {
  height: 16px;
  border-radius: 4px;
  background-color: rgb(100 108 255);
}

.layout-sider {
  border-radius: 4px;
  background-color: rgb(181 190 255);
}

.layout-main {
  flex: 1 1 0%;
  border-radius: 4px;
  background-color: rgb(222 227 255);
}

.vertical-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  gap: 6px;
}

.horizontal-wrapper {
  display: flex;
  flex: 1 1 0%;
  gap: 6px;
}
</style>

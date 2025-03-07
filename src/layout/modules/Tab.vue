<script setup lang="ts">
defineOptions({
  name: ''
});

import PageTab from '@/layout/page-tab/index.vue';
import { useTabStore } from '@/stores/modules/tab';
import { useThemeStore } from '@/stores/modules/theme';
import { reactive } from 'vue';

const tabStore = useTabStore();
const themeStore = useThemeStore();
const TAB_DATA_ID = 'data-tab-id';

type TabNamedNodeMap = NamedNodeMap & {
  [TAB_DATA_ID]: Attr;
};

const tabs = reactive<App.Global.Tab[]>([
  {
    id: '/home',
    label: '首页',
    routeKey: 'home',
    routePath: '/home',
    fullPath: '/home',
    fixedIndex: 1,
    icon: 'mdi:monitor-dashboard',
    localIcon: '__vue_devtool_undefined__',
    i18nKey: 'route.home'
  },
  {
    id: '/document/project',
    label: '项目文档',
    routeKey: 'document_project',
    routePath: '/document/project',
    fullPath: '/document/project',
    fixedIndex: 2,
    icon: 'mdi:file-document-multiple-outline',
    localIcon: 'logo',
    i18nKey: 'route.document_project'
  },
  {
    id: '/function/tab',
    label: '标签页',
    routeKey: 'function_tab',
    routePath: '/function/tab',
    fullPath: '/function/tab',
    fixedIndex: 3,
    icon: 'ic:round-tab',
    localIcon: '__vue_devtool_undefined__',
    i18nKey: 'route.function_tab'
  },
  {
    id: '/function/hide-child/one',
    label: '隐藏子菜单',
    routeKey: 'function_hide-child_one',
    routePath: '/function/hide-child/one',
    fullPath: '/function/hide-child/one',
    fixedIndex: 4,
    icon: 'material-symbols:filter-list-off',
    localIcon: '__vue_devtool_undefined__',
    i18nKey: 'route.function_hide-child_one'
  },
  {
    id: '/function/request',
    label: '请求',
    routeKey: 'function_request',
    routePath: '/function/request',
    fullPath: '/function/request',
    fixedIndex: 5,
    icon: 'carbon:network-overlay',
    localIcon: '__vue_devtool_undefined__',
    i18nKey: 'route.function_request'
  },
  {
    id: '/function/toggle-auth',
    label: '切换权限',
    routeKey: 'function_toggle-auth',
    routePath: '/function/toggle-auth',
    fullPath: '/function/toggle-auth',
    fixedIndex: 6,
    icon: 'ic:round-construction',
    localIcon: '__vue_devtool_undefined__',
    i18nKey: 'route.function_toggle-auth'
  }
]);
</script>

<template>
  <div class="layout-Tab">
    <div class="layout-Tab-Wrapper">
      <div ref="tabRef" class="tab" :class="[themeStore.tab.mode === 'chrome' ? 'tab-chrome' : 'tab-button']">
        <PageTab
          v-for="tab in tabs"
          :key="tab.id"
          :[TAB_DATA_ID]="tab.id"
          :mode="themeStore.tab.mode"
          :dark-mode="themeStore.darkMode"
          :active="tab.id === tabStore.activeTabId"
          :active-color="themeStore.themeColor"
          :closable="!tabStore.isTabRetain(tab.id)">
          <!-- <template #prefix>
            <SvgIcon :icon="tab.icon" :local-icon="tab.localIcon" class="inline-block align-text-bottom text-16px" />
          </template> -->
          <div class="tab-label">{{ tab.label }}</div>
        </PageTab>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-chrome {
  align-items: flex-end;
}
.tab-button {
  align-items: center;
  gap: 12px;
}
.layout-Tab {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;

  .layout-Tab-Wrapper {
    height: 100%;
    flex: 1;
    overflow: hidden;

    .tab {
      display: flex;
      height: 100%;
      padding-right: 18px;

      .tab-label {
        max-width: 240px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>

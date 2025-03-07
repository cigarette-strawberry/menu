import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { SetupStoreId } from '@/enum';
import { useThemeStore } from '../theme';
import { extractTabsByAllRoutes, filterTabsById, filterTabsByIds, getAllTabs, getFixedTabIds, getTabIdByRoute, isTabInTabs } from './shared';

export const useTabStore = defineStore(SetupStoreId.Tab, () => {
  const themeStore = useThemeStore();

  /** Tabs */
  const tabs = ref<App.Global.Tab[]>([
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

  /** Get active tab */
  const homeTab = ref<App.Global.Tab>();

  /** Get all tabs */
  const allTabs = computed(() => getAllTabs(tabs.value, homeTab.value));

  /** Active tab id */
  const activeTabId = ref<string>('');

  /**
   * Set active tab id
   *
   * @param id Tab id
   */
  function setActiveTabId(id: string) {
    activeTabId.value = id;
  }

  /**
   * Set new label of tab
   *
   * @default activeTabId
   * @param label New tab label
   * @param tabId Tab id
   */
  function setTabLabel(label: string, tabId?: string) {
    const id = tabId || activeTabId.value;

    const tab = tabs.value.find(item => item.id === id);
    if (!tab) return;

    tab.oldLabel = tab.label;
    tab.newLabel = label;
  }

  /**
   * Reset tab label
   *
   * @default activeTabId
   * @param tabId Tab id
   */
  function resetTabLabel(tabId?: string) {
    const id = tabId || activeTabId.value;

    const tab = tabs.value.find(item => item.id === id);
    if (!tab) return;

    tab.newLabel = undefined;
  }

  /**
   * Is tab retain
   *
   * @param tabId
   */
  function isTabRetain(tabId: string) {
    if (tabId === homeTab.value?.id) return true;

    const fixedTabIds = getFixedTabIds(tabs.value);

    return fixedTabIds.includes(tabId);
  }

  return {
    /** All tabs */
    tabs: allTabs,
    activeTabId,
    setTabLabel,
    resetTabLabel,
    isTabRetain,
    getTabIdByRoute
  };
});

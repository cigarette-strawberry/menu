import type { Router } from 'vue-router';

/**
 * Get all tabs
 *
 * @param tabs Tabs
 * @param homeTab Home tab
 */
export function getAllTabs(tabs: App.Global.Tab[], homeTab?: App.Global.Tab) {
  if (!homeTab) {
    return [];
  }
  const filterHomeTabs = tabs.filter(tab => tab.id !== homeTab.id);

  const fixedTabs = filterHomeTabs.filter(isFixedTab).sort((a, b) => a.fixedIndex! - b.fixedIndex!);

  const remainTabs = filterHomeTabs.filter(tab => !isFixedTab(tab));

  const allTabs = [homeTab, ...fixedTabs, ...remainTabs];

  return updateTabsLabel(allTabs);
}

/**
 * Is fixed tab
 *
 * @param tab
 */
function isFixedTab(tab: App.Global.Tab) {
  return tab.fixedIndex !== undefined && tab.fixedIndex !== null;
}

/**
 * Get tab id by route
 *
 * @param route
 */
export function getTabIdByRoute(route: App.Global.TabRoute) {
  const { path, query = {}, meta } = route;

  let id = path;

  if (meta.multiTab) {
    const queryKeys = Object.keys(query).sort();
    const qs = queryKeys.map(key => `${key}=${query[key]}`).join('&');

    id = `${path}?${qs}`;
  }

  return id;
}

/**
 * Is tab in tabs
 *
 * @param tab
 * @param tabs
 */
export function isTabInTabs(tabId: string, tabs: App.Global.Tab[]) {
  return tabs.some(tab => tab.id === tabId);
}

/**
 * Filter tabs by id
 *
 * @param tabId
 * @param tabs
 */
export function filterTabsById(tabId: string, tabs: App.Global.Tab[]) {
  return tabs.filter(tab => tab.id !== tabId);
}

/**
 * Filter tabs by ids
 *
 * @param tabIds
 * @param tabs
 */
export function filterTabsByIds(tabIds: string[], tabs: App.Global.Tab[]) {
  return tabs.filter(tab => !tabIds.includes(tab.id));
}

/**
 * extract tabs by all routes
 *
 * @param router
 * @param tabs
 */
export function extractTabsByAllRoutes(router: Router, tabs: App.Global.Tab[]) {
  const routes = router.getRoutes();

  const routeNames = routes.map(route => route.name);

  return tabs.filter(tab => routeNames.includes(tab.routeKey));
}

/**
 * Get fixed tabs
 *
 * @param tabs
 */
export function getFixedTabs(tabs: App.Global.Tab[]) {
  return tabs.filter(isFixedTab);
}

/**
 * Get fixed tab ids
 *
 * @param tabs
 */
export function getFixedTabIds(tabs: App.Global.Tab[]) {
  const fixedTabs = getFixedTabs(tabs);

  return fixedTabs.map(tab => tab.id);
}

/**
 * Update tabs label
 *
 * @param tabs
 */
function updateTabsLabel(tabs: App.Global.Tab[]) {
  const updated = tabs.map(tab => ({
    ...tab,
    label: tab.newLabel || tab.oldLabel || tab.label
  }));

  return updated;
}

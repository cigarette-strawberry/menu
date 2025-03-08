export const GLOBAL_HEADER_MENU_ID = '__GLOBAL_HEADER_MENU__';

export const GLOBAL_SIDER_MENU_ID = '__GLOBAL_SIDER_MENU__';

/**
 * The login module
 *
 * - pwd-login: password login
 * - code-login: phone code login
 * - register: register
 * - reset-pwd: reset password
 * - bind-wechat: bind wechat
 */
type LoginModule = 'pwd-login' | 'code-login' | 'register' | 'reset-pwd' | 'bind-wechat';

/** Theme scheme */
type ThemeScheme = 'light' | 'dark' | 'auto';

/**
 * Reset cache strategy
 *
 * - close: re-cache when close page
 * - refresh: re-cache when refresh page
 */
type ResetCacheStrategy = 'close' | 'refresh';

/**
 * The layout mode
 *
 * - vertical: the vertical menu in left
 * - horizontal: the horizontal menu in top
 * - vertical-mix: two vertical mixed menus in left
 * - horizontal-mix: the vertical first level menus in left and horizontal child level menus in top
 */
type ThemeLayoutMode = 'vertical' | 'horizontal' | 'vertical-mix' | 'horizontal-mix';

/** Page animate mode */
type ThemePageAnimateMode = 'fade' | 'fade-slide' | 'fade-bottom' | 'fade-scale' | 'zoom-fade' | 'zoom-out' | 'none';

type ThemeTabMode = 'button' | 'chrome';

export const themeSchemaRecord: Record<ThemeScheme, any> = {
  light: 'theme.themeSchema.light',
  dark: 'theme.themeSchema.dark',
  auto: 'theme.themeSchema.auto'
};

export const loginModuleRecord: Record<LoginModule, any> = {
  'pwd-login': 'page.login.pwdLogin.title',
  'code-login': 'page.login.codeLogin.title',
  register: 'page.login.register.title',
  'reset-pwd': 'page.login.resetPwd.title',
  'bind-wechat': 'page.login.bindWeChat.title'
};

export const themeLayoutModeRecord: Record<ThemeLayoutMode, any> = {
  vertical: 'theme.layoutMode.vertical',
  'vertical-mix': 'theme.layoutMode.vertical-mix',
  horizontal: 'theme.layoutMode.horizontal',
  'horizontal-mix': 'theme.layoutMode.horizontal-mix'
};

export const themeTabModeRecord: Record<ThemeTabMode, any> = {
  chrome: 'theme.tab.mode.chrome',
  button: 'theme.tab.mode.button'
};

export const themePageAnimationModeRecord: Record<ThemePageAnimateMode, any> = {
  'fade-slide': 'theme.page.mode.fade-slide',
  fade: 'theme.page.mode.fade',
  'fade-bottom': 'theme.page.mode.fade-bottom',
  'fade-scale': 'theme.page.mode.fade-scale',
  'zoom-fade': 'theme.page.mode.zoom-fade',
  'zoom-out': 'theme.page.mode.zoom-out',
  none: 'theme.page.mode.none'
};

export const resetCacheStrategyRecord: Record<ResetCacheStrategy, any> = {
  close: 'theme.resetCacheStrategy.close',
  refresh: 'theme.resetCacheStrategy.refresh'
};

export const DARK_CLASS = 'dark';

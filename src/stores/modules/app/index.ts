import { effectScope, nextTick, onScopeDispose, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { SetupStoreId } from '@/enum';
import { useTabStore } from '../tab';
import { useThemeStore } from '../theme';

export const useAppStore = defineStore(SetupStoreId.App, () => {
  const themeStore = useThemeStore();
  const tabStore = useTabStore();
  const scope = effectScope();

  /** On scope dispose */
  onScopeDispose(() => {
    scope.stop();
  });

  // init

  return {};
});

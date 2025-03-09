<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'FirstLevelMenu' });

interface Props {
  menus: App.Global.Menu[];
  activeMenuKey?: string;
  inverted?: boolean;
  siderCollapse?: boolean;
  darkMode?: boolean;
  themeColor: string;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'select', menu: App.Global.Menu): boolean;
  (e: 'toggleSiderCollapse'): void;
}

const emit = defineEmits<Emits>();

interface MixMenuItemProps {
  /** Menu item label */
  label: App.Global.Menu['label'];
  /** Menu item icon */
  icon: App.Global.Menu['icon'];
  /** Active menu item */
  active: boolean;
  /** Mini size */
  isMini?: boolean;
}

const selectedBgColor = computed(() => {
  const { darkMode, themeColor } = props;

  const light = '#ffffff';
  const dark = '#000000';

  return darkMode ? dark : light;
});

function handleClickMixMenu(menu: App.Global.Menu) {
  emit('select', menu);
}

function toggleSiderCollapse() {
  emit('toggleSiderCollapse');
}
</script>

<template>
  <!-- define component: MixMenuItem -->
  <div>
    <div
      v-for="menu in menus"
      @click="handleClickMixMenu(menu)"
      class="mx-4px mb-6px flex-col-center cursor-pointer rounded-8px bg-transparent px-4px py-8px transition-300 hover:bg-[rgb(0,0,0,0.08)]"
      :class="{
        'text-primary selected-mix-menu': menu.key === activeMenuKey,
        'text-white:65 hover:text-white': inverted,
        '!text-white !bg-primary': menu.key === activeMenuKey && inverted
      }">
      <component :is="menu.icon" :class="[siderCollapse ? 'text-icon-small' : 'text-icon-large']" />
      <p class="w-full ellipsis-text text-center text-12px transition-height-300" :class="[siderCollapse ? 'h-0 pt-0' : 'h-20px pt-4px']">
        {{ menu.label }}
      </p>
    </div>
  </div>
  <!-- define component end: MixMenuItem -->

  <!-- <div class="h-full flex-col-stretch flex-1-hidden">
    <slot></slot>
    <MixMenuItem
      v-for="menu in menus"
      :key="menu.key"
      :label="menu.label"
      :icon="menu.icon"
      :active="menu.key === activeMenuKey"
      :is-mini="siderCollapse"
      @click="handleClickMixMenu(menu)" />
  </div> -->
</template>

<style scoped>
.selected-mix-menu {
  background-color: v-bind(selectedBgColor);
}
</style>

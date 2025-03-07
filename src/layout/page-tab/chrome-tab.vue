<script setup lang="ts">
import type { PageTabProps } from '../types';
import ChromeTabBg from './chrome-tab-bg.vue';
import style from './index.module.css';

defineOptions({
  name: 'ChromeTab'
});

defineProps<PageTabProps>();

type SlotFn = (props?: Record<string, unknown>) => any;

type Slots = {
  /**
   * Slot
   *
   * The center content of the tab
   */
  default?: SlotFn;
  /**
   * Slot
   *
   * The left content of the tab
   */
  prefix?: SlotFn;
  /**
   * Slot
   *
   * The right content of the tab
   */
  suffix?: SlotFn;
};

defineSlots<Slots>();
</script>

<template>
  <div
    class="chrome-tab"
    :class="[
      style['chrome-tab'],
      { [style['chrome-tab_dark']]: darkMode },
      { [style['chrome-tab_active']]: active },
      { [style['chrome-tab_active_dark']]: active && darkMode }
    ]">
    <div class="ChromeTabBg" :class="[style['chrome-tab__bg']]">
      <ChromeTabBg />
    </div>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
    <div class="chrome-tab-divider" :class="[style['chrome-tab-divider']]"></div>
  </div>
</template>

<style scoped lang="scss">
.chrome-tab {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 16px;
  white-space: nowrap;
  padding: 6px 24px;
  margin-right: -18px;

  .ChromeTabBg {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    .chrome-tab-divider {
      position: absolute;
      right: 7px;
      height: 16px;
      width: 1px;
      background: #1f2225;
    }
  }
}
</style>

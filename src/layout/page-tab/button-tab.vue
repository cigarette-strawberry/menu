<script setup lang="ts">
import type { PageTabProps } from '../types';
import style from './index.module.css';

defineOptions({
  name: 'ButtonTab'
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
    class="button-tab"
    :class="[
      style['button-tab'],
      { [style['button-tab_dark']]: darkMode },
      { [style['button-tab_active']]: active },
      { [style['button-tab_active_dark']]: active && darkMode }
    ]">
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </div>
</template>

<style scoped lang="scss">
.button-tab {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 16px;
  border: 1px solid;
  border-radius: 4px;
  padding: 4px 12px;
}
</style>

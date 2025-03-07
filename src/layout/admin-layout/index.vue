<script setup lang="ts">
import { computed, ref } from 'vue';

import style from '@/styles/css/index.module.css';

defineOptions({
  name: ''
});

const showHeader = ref(true);
const showTab = ref(true);
const showSider = ref(true);
const showMobileSider = ref(true);
const showFooter = ref(true);

// css
const leftGapClass = computed(() => {
  return style['left-gap'];
});

const headerLeftGapClass = computed(() => leftGapClass.value);

const footerLeftGapClass = computed(() => {
  return leftGapClass.value;
});
</script>

<template>
  <div class="common commonClass">
    <div class="commonClass">
      <template v-if="showHeader">
        <header :class="[style['layout-header'], headerLeftGapClass]" class="layout-header commonClass">
          <slot name="header"></slot>
        </header>
      </template>

      <template v-if="showTab">
        <div :class="[style['layout-tab'], leftGapClass]" class="layout-tab commonClass">
          <slot name="tab"></slot>
        </div>
      </template>

      <template v-if="showSider">
        <aside :class="[style['layout-sider']]" class="layout-sider commonClass">
          <slot name="sider"></slot>
        </aside>
      </template>

      <!-- <template v-if="showMobileSider"></template> -->

      <main :class="[leftGapClass]" class="layout-main commonClass">
        <slot></slot>
      </main>

      <template v-if="showFooter">
        <footer :class="[style['layout-footer'], footerLeftGapClass]" class="layout-footer commonClass">
          <slot name="footer"></slot>
        </footer>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.commonClass {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.common {
  position: relative;
  height: 100vh;

  .layout-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .layout-tab {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .layout-sider {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }

  .layout-main {
    overflow-y: auto;
  }

  .layout-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';

import style from '@/styles/css/index.module.css';

defineOptions({
  name: ''
});

interface Props {
  siderCollapse?: boolean;
}

const { siderCollapse = false } = defineProps<Props>();

interface Emits {
  /** Update siderCollapse */
  (e: 'update:siderCollapse', collapse: boolean): void;
}

const emit = defineEmits<Emits>();

const showHeader = ref(true);
const showTab = ref(true);
const showSider = ref(true);
const showMobileSider = ref(false);
const showFooter = ref(true);

// css
const leftGapClass = computed(() => {
  return siderCollapse ? style['left-gap_collapsed'] : style['left-gap'];
});

const headerLeftGapClass = computed(() => leftGapClass.value);

const footerLeftGapClass = computed(() => {
  return leftGapClass.value;
});

const siderPaddingClass = computed(() => {
  let cls = '';

  if (showHeader.value && !headerLeftGapClass.value) {
    cls += style['sider-padding-top'];
  }
  if (showFooter.value && !footerLeftGapClass.value) {
    cls += ` ${style['sider-padding-bottom']}`;
  }

  return cls;
});

function handleClickMask() {
  emit('update:siderCollapse', true);
}
</script>

<template>
  <div class="common commonClass">
    <div class="overflow-y commonClass">
      <template v-if="showHeader">
        <header :class="[style['layout-header'], headerLeftGapClass]" class="layout-header commonClass">
          <slot name="header"></slot>
        </header>
        <div :class="[style['layout-header-placement']]" class="overflow"></div>
      </template>

      <template v-if="showTab">
        <div :class="[style['layout-tab'], leftGapClass]" class="layout-tab commonClass">
          <slot name="tab"></slot>
        </div>
        <div :class="[style['layout-tab-placement']]" class="overflow"></div>
      </template>

      <template v-if="showSider">
        <aside :class="[siderPaddingClass, siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider']]" class="layout-sider commonClass">
          <slot name="sider"></slot>
        </aside>
      </template>

      <template v-if="showMobileSider">
        <aside :class="[style['layout-mobile-sider'], siderCollapse ? 'overflow' : style['layout-sider']]" class="layout-mobile-sider commonClass">
          <slot name="sider"></slot>
        </aside>
        <div v-show="!siderCollapse" :class="[style['layout-mobile-sider-mask']]" class="layout-mobile-sider-mask" @click="handleClickMask"></div>
      </template>

      <main :class="[leftGapClass]" class="overflow-y commonClass">
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
.overflow {
  overflow: hidden;
}
.overflow-y {
  overflow-y: auto;
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

  .layout-mobile-sider {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: white;
  }

  .layout-mobile-sider-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .layout-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>

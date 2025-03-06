<script setup lang="ts">
import Header from '@/layout/modules/Header.vue';
import { ref } from 'vue';

import style from '@/styles/css/index.module.css';

defineOptions({
  name: ''
});

const showHeader = ref(true);
const showTab = ref(true);
const showSider = ref(true);
const showMobileSider = ref(true);
const showFooter = ref(true);
</script>

<template>
  <div style="position: relative; height: 100vh">
    <div>
      <template v-if="showHeader">
        <Header :class="style['layout-header']" />
      </template>
      <template v-if="showTab"></template>
      <template v-if="showSider"></template>
      <template v-if="showMobileSider"></template>

      <template v-if="showFooter"></template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

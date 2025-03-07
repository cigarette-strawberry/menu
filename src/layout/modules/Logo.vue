<script setup lang="ts">
defineOptions({
  name: ''
});

interface Props {
  /** Whether to show the title */
  showTitle?: boolean;
}

const { showTitle } = defineProps<Props>();
</script>

<template>
  <RouterLink to="/" class="logo">
    <h2 v-show="showTitle" class="title">logo</h2>
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  .title {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    font-size: 16px;
    font-weight: bold;
    color: --el-color-primary;
  }
}
</style>

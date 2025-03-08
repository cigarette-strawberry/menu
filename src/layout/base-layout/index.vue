<script setup lang="ts">
defineOptions({
  name: ''
});
import AdminLayout from '@/layout/admin-layout/index.vue';
import Header from '@/layout/modules/Header.vue';
import Tab from '@/layout/modules/Tab.vue';
import Sider from '@/layout/modules/Sider.vue';
import Footer from '@/layout/modules/Footer.vue';
import Content from '@/layout/modules/Content.vue';
import Drawer from '@/layout/modules/Drawer.vue';

const Menu = defineAsyncComponent(() => import('@/layout/modules/Menu.vue'));
</script>

<template>
  <div>
    <AdminLayout>
      <template #header>
        <Header />
      </template>

      <template #tab>
        <Tab />
      </template>

      <template #sider>
        <Sider />
      </template>

      <Menu />
      <Content />
      <Drawer />

      <template #footer>
        <Footer />
      </template>
    </AdminLayout>
  </div>
</template>

<style lang="scss" scoped></style>

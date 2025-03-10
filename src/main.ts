import './assets/main.css';
import VueUeditorWrap from 'vue-ueditor-wrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueUeditorWrap);

app.mount('#app');

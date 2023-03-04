import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import FloatingVue from 'floating-vue';
import './assets/base.css';
import 'floating-vue/dist/style.css';

createApp(App).use(FloatingVue).use(router).mount('body');

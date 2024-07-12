// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Tool from '../components/tool.vue';
//@ts-ignore
import About from '../components/about.vue';

import Sett from '../components/sett.vue';

const routes = [
  { path: '/', component: Tool },
  { path: '/about', component: About },
  { path: '/sett', component: Sett }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

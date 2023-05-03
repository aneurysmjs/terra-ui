import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from '@/modules/home/routes/homeRoutes';

const routes = [...homeRoutes];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

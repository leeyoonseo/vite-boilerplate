import { createRouter, createWebHistory } from 'vue-router';
import devRoutes from './routes/dev';

export default () => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        meta: {
          layout: 'dev',
        },
        component: () => import('@/pages/index.vue'),
      },
      ...devRoutes,
    ],
  });
};

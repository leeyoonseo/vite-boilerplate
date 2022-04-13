export default [
  {
    path: '/dev',
    name: 'Dev',
    meta: {
      layout: 'dev',
    },
    component: () => import('@/pages/dev.vue'),
  },
];

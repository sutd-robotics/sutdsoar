import { RouteConfig } from 'vue-router/types/router';

export const LearnRoutes: RouteConfig[] = [
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: "learn" */ './Learn/Learn.vue').then((m: any) => m.default),
  },
];

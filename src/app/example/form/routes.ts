import { RouteConfig } from 'vue-router/types/router';

const formComponent = () => import(/* webpackChunkName: "form" */ './Form/Form.vue');

export const FormRoutes: RouteConfig[] = [
  {
    path: '/example/form',
    name: 'form',
    component: formComponent,
  },
  {
    path: '/form',
    name: 'form-alias',
    component: formComponent,
  },
];

// export const FormRoutes: RouteConfig[] = [
//   {
//     path: '/example/form',
//     name: 'form',
//     component: () => import(/* webpackChunkName: "form" */ './Form/Form.vue').then((m: any) => m.default),
//   },
// ];

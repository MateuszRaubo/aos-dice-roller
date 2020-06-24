import Vue from 'vue';
import VueRouter from 'vue-router';
import Roller from '../views/Roller.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Roller',
    component: Roller,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

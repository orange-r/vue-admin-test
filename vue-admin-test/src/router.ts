import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import UserList from './views/UserList.vue';

Vue.use(Router);

import Layout from '@/layout/index.vue'

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'user-list',
          name: 'UserList',
          component: UserList,
        },
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
      ]
    },
  ],
});

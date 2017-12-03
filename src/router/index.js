import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/login.vue';
import Index from '../pages/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
});

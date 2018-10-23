import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/login.vue';
import SaveBlog from '../pages/saveBlog.vue';
import ReadFile from '../pages/readFile.vue';
import ShowBlog from '../pages/showBlog.vue';
import DetailBlog from '../pages/detailBlog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/SaveBlog',
      name: 'SaveBlog',
      component: SaveBlog
    },
    {
      path: '/showBlog',
      name: 'showBlog',
      component: ShowBlog
    },
    {
      path: '/readFile',
      name: 'readFile',
      component: ReadFile
    },
    {
      path: '/detailBlog',
      name: 'detailBlog',
      component: DetailBlog
    }
  ]
});

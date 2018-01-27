// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Components from './components';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

// 此处需要use后，this.$http.get或者this.$http.post才可以
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Components);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
  components: { App }
});

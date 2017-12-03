import navMenu from './navMenu.vue';

const components = {
  navMenu
};

const mixins = [

];

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
  mixins.forEach((mixin) => {
    Vue.mixin(mixin);
  });
};

export default install;

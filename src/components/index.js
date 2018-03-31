import pageContainer from './page-container';

const components = {
  pageContainer
};

const mixins = [];

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
  mixins.forEach((mixin) => {
    Vue.mixin(mixin);
  });
};

export default install;

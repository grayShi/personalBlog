import pageContainer from './page-container';
import mixin from "./commonFunction";

const components = {
  pageContainer
};

const mixins = [mixin];

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
  mixins.forEach((mixin) => {
    Vue.mixin(mixin);
  });
};

export default install;

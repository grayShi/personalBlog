
  export default{
    install (Vue, options) {
      Vue.prototype.strFormatHtml = function (text) {
        return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, '\'');
      };

      Vue.prototype.htmlFormatStr = function (text) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
      };
      Vue.prototype.required = function (name, type = 'string', trigger = 'blur') {
        return { type, required: true, message: this.getMessage(name), trigger };
      };
      Vue.prototype.requiredMax = function (count) {
        return { max: count, message: this.getMessage('REQUIRE_MAX', count), trigger: 'blur' };
      };
      Vue.prototype.getMessage = function (code, message) {
        return code;
      };
    }
  };

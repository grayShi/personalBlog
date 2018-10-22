import moment from 'moment';

export default {
  methods: {
    strFormatHtml (text) {
      return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, '\'');
    },
    htmlFormatStr (text) {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    },
    requiredRules (name, type = 'string', trigger = 'blur') {
      return { type, required: true, message: this.getMessage(name), trigger };
    },
    requiredMax (count) {
      return { max: count, message: this.getMessage('REQUIRE_MAX', count), trigger: 'blur' };
    },
    getMessage (code, message) {
      return code;
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    dateFormat (date) {
      return moment(date).format('YYYY-MMM-DD HH:MM');
    }
  }
};

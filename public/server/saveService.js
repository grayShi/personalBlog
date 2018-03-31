const BaseService = require('./baseService');
const { Blogs } = require('../model');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.blogs = Blogs;
  }
  saveBlog (form) {
    const saveData = {
      subject: form.subject,
      contentText: form.contentText
    };
    return this.blogs.create(saveData);
  }
}
module.exports = new UserHandle();

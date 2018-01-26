const BaseService = require('./baseService');
const { Blogs } = require('../model');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.blogs = Blogs;
  }
  saveBlogs (form) {
    const saveData = {
      description: form.description
    };
    debugger;
    return this.blogs.create(saveData);
  }
}
module.exports = new UserHandle();

const BaseService = require('./baseService');
const { Blogs, Tag } = require('../model');
const _ = require('lodash');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.blogs = Blogs;
    this.tag = Tag;
  }
  async saveBlog (form) {
    return this.doTransaction(async (transaction) => {
      let tagId = [];
      return Promise.all(_.map(form.tag, async item => {
        const findTags = await this.tag.findOrCreate({
          where: {
            tagName: item
          }
        });
        tagId.push(findTags[0].id);
      })).then(() => {
        const saveData = {
          subject: form.subject,
          contentText: form.contentText,
          tagId: tagId.join(',')
        };
        return this.blogs.create(saveData);
      });
    });
  }
}
module.exports = new UserHandle();

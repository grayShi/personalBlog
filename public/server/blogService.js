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
      const saveData = {
        subject: form.subject,
        contentText: form.contentText,
        isValid: true,
        blogTag: _.map(form.tag, item => ({tagName: item}))
      };
      return this.blogs.create(saveData, {include: 'blogTag', transaction});
    });
  }
  async findBlogList () {
    return this.doTransaction(async (transaction) => {
      const find = await this.blogs.findAll({
        attributes: ['id', 'subject', 'contentText', 'updatedAt', 'createdBy'],
        where: {
          isValid: true
        },
        include: {
          association: 'blogTag',
          attributes: ['tagName']
        },
        order: [['updatedAt', 'desc']],
        transaction
      });
      return _.map(find, item => ({
        id: item.id,
        subject: item.subject,
        contentText: item.contentText.slice(0, 20),
        updatedAt: item.updatedAt,
        createdBy: item.createdBy,
        blogTag: item.blogTag
      }));
    });
  }
}
module.exports = new UserHandle();

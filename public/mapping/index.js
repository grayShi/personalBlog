const {
  Blogs,
  Tag,
  User
} = require('../model');

// Blogs.belongsTo(Company, {foreignKey:'companyId'});
Blogs.hasMany(Tag, {foreignKey: 'blogId', sourceKey: 'id', as: 'blogTag'});
Tag.belongsTo(Blogs, {foreignKey: 'blogId', targetKey: 'id'});

const BaseService = require('./baseService');
const { User } = require('../model');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.user = User;
  }
  async login (form) {
    const user = await this.user.findOne({
      where: {
        name: form.name,
        password: form.password
      },
      attributes: ['id', 'name', 'password', 'role']
    });
    return user;
  }
}
module.exports = new UserHandle();

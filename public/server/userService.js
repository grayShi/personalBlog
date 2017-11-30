const BaseService = require('./baseService');
const { User } = require('../model');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.user = User;
  }
  login (username) {
    return this.user.findAll({
      where: {
        id: 1
      }
    });
  }
}
module.exports = new UserHandle();

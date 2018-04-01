const Sequelize = require('sequelize');
const seq = require('../model');

module.exports = class BaseService {
  async doTransaction (operations, transaction) {
    debugger
    if (typeof transaction === 'undefined' || transaction === null) {
      return seq.transaction(transaction => operations(transaction));
    }
    return operations(transaction);
  }
};

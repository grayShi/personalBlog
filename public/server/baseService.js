const seq = require('../utils/connection').get('mssql');
const { getNamespace } = require('continuation-local-storage');

module.exports = class BaseService {
  async doTransaction(operations, transaction) {
    if (typeof transaction === 'undefined' || transaction === null) {
      return seq.transaction(async t => operations(t));
    }
    return operations(transaction);
  }

  getUserId() {
    const cls = getNamespace(SESSION_ID);
    const userId = cls.get(USER_ID);
    if (!userId) {
      logger.warn('User Id not found in thread local.');
      logger.warn('This might caused by transaction created in Resolver/Rejector of Promise');
    }
    return userId;
  }
};

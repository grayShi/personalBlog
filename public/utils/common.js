// const logger = require('log4js').getLogger();
const _ = require('lodash');

exports.success = function (res, data) {
  const ret = { success: true };
  if (typeof data !== 'undefined') ret.data = data;
  if (res.headersSent) {
    res.send(JSON.stringify(ret));
  } else {
    res.json(ret);
  }
};
exports.fail = function (res, error) {
  // logger.error(error);
  const ret = { success: false };
  if (!_.isUndefined(error)) {
    ret.error = error;
  }
  if (res.headersSent) {
    res.send(JSON.stringify(ret));
  } else {
    res.json(ret);
  }
};

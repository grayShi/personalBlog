// const cls = require('continuation-local-storage');
// const Promise = require('bluebird');
// const clsBluebird = require('cls-bluebird');

// const namespace = cls.createNamespace('transaction');

// clsBluebird(namespace);

const Sequelize = require('sequelize');

// Sequelize.useCLS(namespace);
const _ = require('lodash');
const logger = require('log4js').getLogger();

class ConnectionManager {
  constructor() {}
  configure(config) {
    this.sequelizeMap = {};
    const proms = [];
    _.each(config, (v, k) => {
      const seq = (this.sequelizeMap[k] = new Sequelize(v.uri, v.options));
      proms.push(seq
        .authenticate()
        .then(() => {
          logger.info(`Connection named[${k}] has been established.`);
          logger.info(`Connection URI: ${v.uri}`);
        })
        .catch((err) => {
          logger.error(`Connect to named[${k}] failed.`);
          logger.trace(err);
          logger.error(`Connection URI: ${v.uri}`);
        }));
    });
    return Promise.all(proms);
  }
  get(key) {
    if (key in this.sequelizeMap) {
      return this.sequelizeMap[key];
    }
    logger.error(`Connection named[${key}] not found`);
  }
}

module.exports = new ConnectionManager();

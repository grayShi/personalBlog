const BaseService = require('./baseService');
const normalizedPath = require('path');
const fs = require('fs');

class LogerHandle extends BaseService {
  findFile (path, type) {
    return new Promise(function (resolve, reject) {
      const fileNameList = [];
      const connect = fs.readdirSync(normalizedPath.resolve(path));
      connect.filter(fileName => {
          if (type === 'photo') {
            return fileName.match(/jpg/) || fileName.match(/jpeg/) || fileName.match(/png/);
          } else {
            return fileName;
          }
        }).forEach(fileName => {
          fileNameList.push(fileName);
        });
      if (connect.length > 0) {
        resolve(fileNameList);
      } else {
        reject(new Error('ERR_NO_FILE'));
      }
    });
  }
}
module.exports = new LogerHandle();

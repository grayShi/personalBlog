const logService = require('../server/logService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/commom');

router.post('/find', (req, res) => {
  logService.findFile(req.body.path, req.body.type).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

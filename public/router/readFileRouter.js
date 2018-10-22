const readFileService = require('../server/readFileService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/common');

router.post('/read', (req, res) => {
  readFileService.getFileList(req.body.path).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

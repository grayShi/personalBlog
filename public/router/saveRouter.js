const saveService = require('../server/saveService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/commom');

router.post('/saveBlogs', (req, res) => {
  saveService.saveBlogs(req.body.form).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

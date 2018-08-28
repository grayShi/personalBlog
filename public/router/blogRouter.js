const saveService = require('../server/saveService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/commom');

router.post('/saveBlog', (req, res) => {
  saveService.saveBlog(req.body.form).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

router.post('/findBlogList', (req, res) => {
  saveService.findBlogList().then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

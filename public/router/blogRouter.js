const blogService = require('../server/blogService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/common');

router.post('/saveBlog', (req, res) => {
  blogService.saveBlog(req.body.form).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

router.post('/findBlogList', (req, res) => {
  blogService.findBlogList().then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

router.post('/getDetailBlog', (req, res) => {
  blogService.getDetailBlog(req.body.blogId).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

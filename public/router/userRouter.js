const userService = require('../server/userService');
const express = require('express');
const router = express.Router();
const { success, fail } = require('../utils/commom');

router.post('/login', (req, res) => {
  userService.login(req.body.username).then((v) => {
    success(res, v);
  }).catch(err => fail(res, err));
});

module.exports = router;

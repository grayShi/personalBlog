const userRouter = require('./userRouter');

module.exports = app => {
  app.use('/api/user', userRouter);
};

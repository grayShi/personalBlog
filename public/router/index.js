const userRouter = require('./userRouter');
const logRouter = require('./logRouter');

module.exports = app => {
  app.use('/api/log', logRouter);
  app.use('/api/user', userRouter);
};

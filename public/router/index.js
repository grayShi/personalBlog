const userRouter = require('./userRouter');
const logRouter = require('./logRouter');
const saveRouter = require('./saveRouter');

module.exports = app => {
  app.use('/api/log', logRouter);
  app.use('/api/user', userRouter);
  app.use('/api/save', saveRouter);
};

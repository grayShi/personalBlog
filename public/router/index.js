const userRouter = require('./userRouter');
const logRouter = require('./logRouter');
const saveRouter = require('./saveRouter');
const readFileRouter = require('./readFileRouter');

module.exports = app => {
  app.use('/api/log', logRouter);
  app.use('/api/user', userRouter);
  app.use('/api/save', saveRouter);
  app.use('/api/readFile', readFileRouter);
};

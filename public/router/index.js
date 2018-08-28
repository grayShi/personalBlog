const userRouter = require('./userRouter');
const logRouter = require('./logRouter');
const blogRouter = require('./blogRouter');
const readFileRouter = require('./readFileRouter');

module.exports = app => {
  app.use('/api/log', logRouter);
  app.use('/api/user', userRouter);
  app.use('/api/blog', blogRouter);
  app.use('/api/readFile', readFileRouter);
};

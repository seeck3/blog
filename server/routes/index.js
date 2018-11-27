const blogRouter = require('./blog.routes');

const router = require('express').Router();

module.exports = router
  .use('/blog', blogRouter)

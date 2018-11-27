const blogController = require('../controllers/blog.controller');

const router = require('express').Router();

//    /resource/:id   => after index.js it goes to /books/:id
// and /api/books/:id

module.exports = router
  .get('/', blogController.index)
// .post('/new', blogController.create)
// .get('/:blog_id', blogController.show)
// .get('/:blog_id/contact', blogController.contact)
// .put('/:blog_id', blogController.update)
// .delete('/:blog_id', blogController.destroy)

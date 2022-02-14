var express = require('express');
var router = express.Router();
var booksController = require('../controller/booksController')

router.get('/', function(req, res, next) {
  res.json({
    status: 'Books API is working!'
  });
});

router.route("/books")
    .get(booksController.index)
    .post(booksController.new);

router.route("/books/:book_id")
    .get(booksController.view)
    .put(booksController.update)
    .delete(booksController.delete);

module.exports = router;

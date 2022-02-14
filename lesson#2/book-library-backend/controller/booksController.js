const fs = require('fs');
const books = require("../data/books.json");

exports.index = function(req, res) {

    res.json({
        status: "OK",
        message: "Books have been retrieved successfully!",
        data: books
    });
}

exports.new = async function(req, res) {

    let index = Math.floor(Math.random() * 9999) + 796;

    let book = req.body;
    book['_id'] = index;

    books.push(book);

    let data = JSON.stringify(books);
    fs.writeFileSync('./data/books.json', data);

    res.json({
        status: "OK",
        message: "New book has been created successfully!",
        data: book
    });
}

exports.delete = async function(req, res) {

    let id = parseInt(req.params.book_id);
    var filteredBooks = books.filter(function (el) {
        return el._id !== id;
    });

    let data = JSON.stringify(filteredBooks);
    fs.writeFileSync('./data/books.json', data);

    res.json({
        status: "OK",
        message: "Book has been deleted successfully!",
        data: filteredBooks
    });
}

exports.view = function (req, res) {
    let id = parseInt(req.params.book_id);

    var filteredBook = books.filter(function (el) {
        return el._id === id;
    });

    res.json({
        status: "OK",
        message: "Book has been retrieved successfully!",
        data: filteredBook
    });
};

exports.update = function (req, res) {
    let id = parseInt(req.params.book_id);

    var filteredBooks = books.filter(function (el) {
        return el._id !== id;
    });

    let book = req.body;
    filteredBooks.push(book);

    let data = JSON.stringify(filteredBooks);
    fs.writeFileSync('./data/books.json', data);

    res.json({
        status: "OK",
        message: "Book has been updated successfully!",
        data: book
    });
};

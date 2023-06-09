const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const bookname = req.body.bookname;
    const description = req.body.description;
    const duration = req.body.duration;
    const date= Date.parse(req.body.date);

    const newBook = new Book({
        username,
        bookname,
        description,
        duration,
        date,
    });

    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id)
    .then(book => {
        book.username = req.body.username;
        book.bookname = req.body.bookname;
        book.description = req.body.description;
        book.duration = Number(req.body.duration);
        book.date = Date.parse(req.body.date);

        book.save()
        .then(() => res.json('Book Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
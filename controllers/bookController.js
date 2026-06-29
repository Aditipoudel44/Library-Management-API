const Book = require("../models/Book");

// Create Book

const createBook = async (req, res) => {

    try {

        const book = await Book.create(req.body);

        res.json({
            message: "Book Added Successfully",
            book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Books

const getAllBooks = async (req, res) => {

    try {

        const books = await Book.find();

        res.json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Book By ID

const getBookById = async (req, res) => {

    try {

        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book Not Found"
            });
        }

        res.json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Book

const updateBook = async (req, res) => {

    try {

        const book = await Book.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        if (!book) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        res.json({

            message: "Book Updated Successfully",

            book

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Book

const deleteBook = async (req, res) => {

    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        res.json({
            message: "Book Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {

    createBook,

    getAllBooks,

    getBookById,

    updateBook,

    deleteBook

};
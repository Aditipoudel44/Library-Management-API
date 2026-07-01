# Library Management API

## Introduction

The Library Management API is a RESTful backend application developed using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It is designed to manage library records by performing CRUD (Create, Read, Update, and Delete) operations on books. The API also keeps track of borrowing information, including the borrower's name, issue date, return date, and the current status of each book. The project follows the MVC (Model-View-Controller) architecture, making the code organized, modular, and easy to maintain.



## Objective

The main objective of this project is to develop a backend API for a library management system. It allows users to store and manage book records efficiently, retrieve book details, search books by their unique ID, update existing records, and remove books from the database when necessary. The project also demonstrates the implementation of RESTful APIs and database integration using MongoDB.



## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- Git & GitHub



## Project Flow

When a client sends an HTTP request through Postman, the request is first received by the Express server (`index.js`). The server forwards the request to the appropriate route defined in `bookRoutes.js`. Based on the requested endpoint and HTTP method, the corresponding controller function is executed. The controller then communicates with the `Book` model, which performs the required database operation using Mongoose. After the operation is completed, the controller sends a JSON response back to the client containing either the requested data or a success/error message.



## Features

- Add new books to the library database.
- View all books stored in the database.
- Search for a book using its unique MongoDB ID.
- Update book details such as borrower information, issue date, return date, and status.
- Delete books from the database.
- Maintain book availability and borrowing records.
- Perform all CRUD operations using RESTful API endpoints.



## API Operations

### Create Book

**Method:** `POST`

**Endpoint:** `/api/books`

Creates a new book record in the database with details such as title, author, borrower, issue date, return date, and status.



### Get All Books

**Method:** `GET`

**Endpoint:** `/api/books`

Retrieves all book records stored in the MongoDB database.



### Get Book by ID

**Method:** `GET`

**Endpoint:** `/api/books/:id`

Retrieves the details of a specific book by using its unique MongoDB Object ID.



### Update Book

**Method:** `PUT`

**Endpoint:** `/api/books/:id`

Updates the details of an existing book, including borrower information, issue date, return date, or book status.



### Delete Book

**Method:** `DELETE`

**Endpoint:** `/api/books/:id`

Deletes the selected book record from the database.



## Conclusion

The Library Management API successfully demonstrates the development of a RESTful backend application using Node.js, Express.js, MongoDB, and Mongoose. It implements all essential CRUD operations while following the MVC architecture for better code organization. The project effectively manages book records, tracks borrowing details, and provides a strong foundation for building a complete library management system in the future.
const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const PublisherController= require("../controllers/publisherController");
const BookController = require("../controllers/bookController");
router.post("/newAuthor", AuthorController.createAuthor);
router.post("/newPublisher", PublisherController.createPublisher);
router.post("/newBook", BookController.createNewBook);
router.get("/getBookDetails", BookController.getBookDetails)
module.exports = router;
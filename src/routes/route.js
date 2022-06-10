const express = require('express');
const AuthMiddleWare = require("../middleware/authMiddleware")
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const PublisherController= require("../controllers/publisherController");
const BookController = require("../controllers/bookController");
router.post("/newAuthor", AuthorController.createAuthor);
router.post("/newPublisher", PublisherController.createPublisher);
router.post("/newBook", BookController.createNewBook);
router.get("/getBookDetails", BookController.getBookDetails);
router.get("/mixedUp", BookController.mixedUp);
//Assignment For Middleware
router.get("/middlewaregf", AuthMiddleWare.md1, BookController.sadYep)
module.exports = router;
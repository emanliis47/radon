const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController");

router.get("/findBook/:Author_Ids", BookController.findBook)
router.post("/createBook", BookController.createBook)
router.post("/createAuthor", BookController.createAuthor)
router.get("/chetanBook", BookController.getChetanBhagat)
router.get("/getUpadate", BookController.authorBooks)
router.get("/bookPrice", BookController.bookPrice)
router.get("/FindAge", BookController.FindAge)
module.exports = router;
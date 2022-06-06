const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")


router.post('/createBookName', UserController.createBookName)

router.get("/getBookData", UserController.getBookData)
module.exports = router;
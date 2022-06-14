const express = require('express');
const router = express.Router();
// const CreateUserMiddleware = require("../middlewares/createUserMiddleware")
const UserController= require("../controllers/userController")
router.post("/createUser", UserController.createUser)
router.post("/login", UserController.logInUser)
module.exports = router;
const express = require('express');
const router = express.Router();
const CreateUserMiddleware = require("../middlewares/createUserMiddleware")
const UserController= require("../controllers/userController")
const ProductContoller= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
router.post("/createUser",CreateUserMiddleware.userValidator, UserController.createUser)
router.post("/createProduct", ProductContoller.createProduct)
router.post("/createOrder",CreateUserMiddleware.userValidator, OrderController.createaOrder)


module.exports = router;
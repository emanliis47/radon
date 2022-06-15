const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthMiddleware= require("../middleware/auth")

 // Dubble OK OK
router.post("/users", userController.createaUser  )
// Dubble OK OK
router.post("/login", AuthMiddleware.authLoginUser,userController.loginUser)
// Dubble OK OK
router.get("/users/:userId", AuthMiddleware.authToken,AuthMiddleware.authUserId,userController.getUserData)
// Dubble OK OK
router.put("/users/:userId",AuthMiddleware.authToken,userController.updateUser)
// Dubble OK OK
 router.delete("/users/:userId",AuthMiddleware.authToken,userController.deleteUser)

module.exports = router;
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthMidlleware= require("../middleware/auth")



router.post("/users",userController.createUser)

router.post("/login",userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",AuthMidlleware.authenticate,AuthMidlleware.authorise, userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",AuthMidlleware.authenticate,AuthMidlleware.authorise, userController.updateUser)
router.delete('/users/:userId',AuthMidlleware.authenticate,AuthMidlleware.authorise, userController.deleteUser)

module.exports = router;
const userModel = require("../models/userModel");
 const authLoginUser= async function(req, res, next){
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct"
      }) 
      next()
 }
 const authUserId= async function(req, res, next){
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" })
    next()
 }
 const authToken= async function(req, res, next){
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" })
  next()
 }
 module.exports.authUserId= authUserId
 module.exports.authToken= authToken
 module.exports.authLoginUser= authLoginUser
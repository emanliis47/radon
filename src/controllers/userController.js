const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// Dubble OK OK
const createaUser = async function (req, res) {
  let userData = req.body;
  let savedData = await userModel.create(userData);
  res.send({ msg: savedData });
};
// Dubble OK OK
const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "radon",
          organisation: "FunctionUp",
        },
        "functionup-radon"
      );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
// Dubble OK OK
const getUserData = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  res.send({ status: true, data: userDetails });
};
// Dubble OK OK
const updateUser = async function (req, res) {
  let UserId = req.params.userId
  let checkId= await userModel.findById(UserId)
  if(!checkId)
 return res.send({ status: false, msg: "No such user exists" });
let UserUpdated = await userModel.findOneAndUpdate({_id:checkId},{$set:{firstName: "SameerSweety"}})
res.send({status: "Upadted", msg: UserUpdated})
};
// Dubble OK OK
const deleteUser= async function(req, res){
let UserId1= req.params.userId
let checkId1= await userModel.findById(UserId1)
  if(!checkId1)
  return res.send({ status: false, msg: "No such user exists" })
  let UserDelete= await userModel.findOneAndUpdate({_id:checkId1},{$set:{isDelete: true}})
  res.send({Status:"Deleted", msg: UserDelete})
}
const userPost = async function(req, res){
let tokenchk= req.headers["x-auth-token"]
if(!tokenchk) return res.send({Status: false, mgs: "Please Enter Your Token"})
let varifyToken = jwt.verify(tokenchk, "functionup-radon")
if(!varifyToken) return res.send({Status: false, msg: "User Is Not Exist"})
let userId2 = req.params.userId
let userVerify = await userModel.findById({_id: userId2})
if(!userVerify) return res.send({Status: false, mgs:"User Is Not Found"})
let post= req.params.post
let massage= req.body.massage
let pushMassage = massage.push(massage)

}

module.exports.createaUser = createaUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;

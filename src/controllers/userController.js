const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.send({status: false,msg: "username or the password is not corerct"});
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      mySoul: "SweetySameer",
      myLove: "KareenaKanha"
    },
    "SameerSweety2001@"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId= req.params.userId
  let user = await userModel.findById(req.params.userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.send({ status: updatedUser, data: updatedUser });
};
const deleteUser= async function(req, res){

  let userId= req.params.userId
  let userDetails= await userModel.findById(userId)
    if(!userDetails)
    return res.send({ status: false, msg: "No such user exists" })
    let UserDelete= await userModel.findOneAndUpdate({_id:userDetails},{$set:{isDelete: true}}, {new: true})
    res.send({Status:"Deleted", msg: UserDelete})
  }

const postMessage = async function (req, res) {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    let updatedPosts = user.posts
    let checkData = updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{$set:{posts: checkData}}, {new: true})
    return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser= deleteUser;

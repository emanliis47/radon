const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
 try{let data = req.body;
  if(Object.keys(data).length == 0) return res.status(400).send({Status: false, msg: "Please Don't Give Blank It"})
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
}
 catch(err){
  console.log("This is the error:",  err.message)
  res.status(500).send({mgs: "Error", error: err.message})

 }};

const loginUser = async function (req, res) {
  try{let data = req.body;
    if(Object.keys(data).length == 0) return res.status(400).send({Status: false, msg: "Please Don't Give Blank It"})
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.status(401).send({status: false,msg: "username or the password is not corerct"});
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      mySoul: "SweetySameer",
      myLove: "KareenaKanha"
    },
    "SameerSweety2001@"
  );
  res.setHeader("x-auth-token", token);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });
  res.status(200).send({ status: true, data: userDetails });
} 
catch(err){
  console.log("This is the error:",  err.message)
  res.status(500).send({mgs: "Error", error: err.message})
}};


const getUserData= async function(req, res){
  try{
  let userId= req.params.userId
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(401).send("No such user exists")
   
}res.status(200).send({Status: true, msg: getUserData})} 
catch(err){
  console.log("This is the error:",  err.message)
  res.status(500).send({mgs: "Error", error: err.message})
}}



const updateUser = async function (req, res) {
  try{let data = req.body;
    if(Object.keys(data).length == 0) return res.status(400).send({Status: false, msg: "Please Don't Give Blank It"})
    let userId= req.params.userId
  let user = await userModel.findById(req.params.userId);
  if (!user) {
    return res.status(401).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.status(200).send({ status: updatedUser, data: updatedUser })} 
  catch(err){
    console.log("This is the error:",  err.message)
    res.status(500).send({mgs: "Error", error: err.message})
  }
};



const deleteUser= async function(req, res){
try{
  let userId= req.params.userId
  let userDetails= await userModel.findById(userId)
    if(!userDetails)
    return res.status(401).send({ status: false, msg: "No such user exists" })
    let UserDelete= await userModel.findOneAndUpdate({_id:userDetails},{$set:{isDelete: true}}, {new: true})
    res.status(200).send({Status:"Deleted", msg: UserDelete})}
    catch(err){
      console.log("This is the error:",  err.message)
      res.status(500).send({mgs: "Error", error: err.message})
    }
  }

  

const postMessage = async function (req, res) {
  try{ let data = req.body;
    if(Object.keys(data).length == 0) return res.status(400).send({Status: false, msg: "Please Don't Give Blank It"})
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(401).send({status: false, msg: 'No such user exists'})
    let updatedPosts = user.posts
    let postsUpdate = updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{$set:{posts: postsUpdate}}, {new: true})
    return res.status(200).send({status: true, data: updatedUser})}
    catch(err){
      console.log("This is the error:",  err.message)
      res.status(500).send({mgs: "Error", error: err.message})
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser= deleteUser;

const UserModel= require("../models/userModel");
const JWT = require("jsonwebtoken")
const createUser = async function(req, res){
 const datacomes = req.body
    const signUpUser = await UserModel.create(datacomes)
    res.send({msg: signUpUser});

}
const logInUser = async function(req, res){
    let Password= req.body.Password
    let EmailId= req.body.EmailId
    let Users = await UserModel.findOne({EmailId: EmailId, Password: Password})
    if(!Users) return res.send({Status: false, msg: "User Is Not Valid"})
    let jwtToken = await JWT.sign({userid: Users._id.toString()}, "SweetySameerSwain")
    res.setheaders(jwtToken)
    res.send({Status: true, Token: jwtToken})
}
const getUserDetails= async function(req, res){
    let checkHearer= req.headers["x-auth-token"]
    if(!checkHearer) checkHearer=req.headers["X-auth-token"]
}
module.exports.logInUser= logInUser;
module.exports.createUser= createUser;
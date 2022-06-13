const UserModel= require("../models/userModel");
const createUser = async function(req, res){
 const datacomes = req.body
    const yepCreateUsers = await UserModel.create(datacomes)
    res.send({msg: yepCreateUsers});

}
module.exports.createUser= createUser;
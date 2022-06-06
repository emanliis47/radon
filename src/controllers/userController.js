const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createBookName = async function (req, res){
    let bookData = req.body
    let saveBookData = await UserModel.create(bookData)
    res.send({msg: saveBookData})
}

const getBookData= async function (req, res) {
    let allBook= await UserModel.find()
    res.send({msg: allBook})
}

module.exports.createBookName = createBookName
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.getBookData= getBookData
const UserModel= require("../models/userModel")

let a = 12
let b = a+ 10
console.log(b) 
const createBookName = async function (req, res){
    let bookData = req.body
    let saveBookData = await UserModel.create(bookData)
    res.send({msg2: saveBookData})
}

const getBookData= async function (req, res) {
    let allBook= await UserModel.find()
    res.send({msg1: allBook})
}

module.exports.createBookName = createBookName

module.exports.getBookData= getBookData
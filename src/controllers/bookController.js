const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
// Assignment- 1
const createAuthor = async function(req, res){
    const authorData = req.body
    let allAuthors = await AuthorModel.create(authorData)
    res.send({msg:  allAuthors})
};
// Assignment- 2
const createBook = async function(req, res){
    const bookData = req.body
    let allBooks = await BookModel.create(bookData)
    res.send({msg: allBooks})
};
// Assignment- 3
const getChetanBhagat = async function(req, res){
    let chetanData = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id:1")
    let chetanBooks = await BookModel.find({author_id: chetanData[0].author_id})
    res.send({msg: chetanBooks})
};
// Assignment- 4
const authorBooks= async function(req, res){
    let data = await BookModel.findOneAndUpdate({name: "Two states"}, {$set:{prices:100}}, {new:true})
    let authorDt= await AuthorModel.find({author_id:data.author_id}).select("author_name:1")
    let price=data.prices
    res.send({mgs: authorDt, price})
};
// Assignment- 5
const bookPrice = async function(req, res){
    let data1=await BookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id :1})
    let combData =await AuthorModel.find({map:(x=> x.author_name)})
    let gt = data1.author_name
    res.send({mgs: combData, gt})
};
// Assignment- 6
const findBook = async function(req, res){
let pathParamsReq = req.params.Author_Ids
console.log(pathParamsReq)
let findBookByAuthor = await BookModel.find({author_id: pathParamsReq}).select({name:1, _id:0})
res.send({msg:findBookByAuthor})
};
// Assignment- 7
const FindAge = async function(req, res){
    //let nameAge = await AuthorModel.find({age:{$gt: 50}}).select({author_name:1, age:1, _id:0})
    let findAuthorId = await AuthorModel.find({age:{$gt: 50}}).select({author_id:1, _id:0})
    let findAuthorRating = await BookModel.find({$and:[{author_id: findAuthorId},{ratings:{$gt: 4}} ]}.select({author_id:1, _id:0}))
    let prAuthor= await AuthorModel.find({author_id: findAuthorRating}).select({author_name:1, age:1, _id:0})
    res.send({msg: prAuthor})
}
 module.exports.FindAge= FindAge 
 module.exports.findBook= findBook
 module.exports.bookPrice= bookPrice
 module.exports.authorBooks= authorBooks
 module.exports.getChetanBhagat= getChetanBhagat
 module.exports.createAuthor=  createAuthor
 module.exports.createBook= createBook
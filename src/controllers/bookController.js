const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");
const createNewBook= async function(req, res){
    let bookData= req.body;
    let authordetail= await AuthorModel.find().select({_id:1})
    let publisherdetail = await PublisherModel.find().select({_id:1})
     let authid = authordetail.map(function (x){
         return x._id.toString()

     });
     let publisherid = publisherdetail.map(function (x){
        return x._id.toString()
     });
     if(!(bookData.author && bookData.publisher)){
         res.send({msg: "error: type missing"})}
         else if(!(authid.includes(bookData.author) && publisherid.includes( bookData.publisher)))
         {
             res.send({msg: "AuthorId Is Not Valid"})}
             else{ let createdata= await BookModel.create(bookData)}
         }
  const getBookDetails = async function(req, res){
let allBooks = await BookModel.find().populate("author").populate("publisher")
res.send({mgs: allBooks})
  }
module.exports.createNewBook= createNewBook
module.exports.getBookDetails= getBookDetails

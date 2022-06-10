const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");
const createNewBook= async function(req, res){
    let bookData= req.body;
    let authordetail= await AuthorModel.find().select({_id:1})
    console.log(authordetail)
    let publisherdetail = await PublisherModel.find().select({_id:1})
    console.log(publisherdetail)
     let authid = authordetail.map(function (x){
         return x._id.toString() 

     });
     console.log(authid)
     let publisherid = publisherdetail.map(function (x){
        return x._id.toString()
     });
     if(!(bookData.author && bookData.publisher)){
         res.send({msg: "error: type missing"})}
         else if(!(authid.includes(bookData.author) && publisherid.includes ( bookData.publisher)))
         {
             res.send({msg: "AuthorId Is Not Valid"})}
             else{ let createdata = await BookModel.create(bookData)
             res.send({msg: createdata}) }
         }
  const getBookDetails = async function(req, res){
let allBooks = await BookModel.find().populate("author").populate("publisher")
res.send({mgs: allBooks})
  }

  const mixedUp = async function(req, res){
    let doaggregate = await BookModel.aggregate([{$group: { _id: "$Two states", totalQuantity: { $sum: "$price" } }}])
    res.send({msg: doaggregate})
  };
//Assignment For Middleware
const sadYep = async function(req, res){
  console.log("I AM VERY SAD TODAY")
  res.send("MY SWEETY IS ALSO SAD")
}



module.exports.sadYep= sadYep
module.exports.mixedUp= mixedUp
module.exports.createNewBook= createNewBook
module.exports.getBookDetails= getBookDetails

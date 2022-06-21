const BlogModel= require("../models/blogModel")
const AuthorModel = require("../models/authorModel")
const createBlog = async function (req, res){
    let data = req.body
    let authorData = req.body.authorId
    let blogDetails = await BlogModel.create(data)
    let isAuthorId = await AuthorModel.findById({_id:authorData})
    if(!isAuthorId) return res.status(401).send({Status: false, msg: "AuthorId Is Not Exist"})
    res.status(201).send({mgs:  blogDetails})
}
module.exports.createBlog =createBlog
const AuthorModel = require("../models/authorModel")
const createAuthor = async function(req, res){
    let data = req.body
    let authorDeatails = await AuthorModel.create(data)
    res.status(201).send({mgs: authorDeatails}) 
}
module.exports.createAuthor = createAuthor


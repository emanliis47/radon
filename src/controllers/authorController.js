const AuthorModel = require("../models/authorModel");

const createAuthor = async function(req, res){
    let authorData = req.body;
    let authorsName= await AuthorModel.create(authorData);
    res.send({msg: authorsName});
};
module.exports.createAuthor= createAuthor;
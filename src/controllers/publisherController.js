const PublisherModel = require("../models/publisherModel");
const createPublisher= async function(req, res){
    let publisherData= req.body;
    let createPublisherDetails= await PublisherModel.create(publisherData);
    res.send({msg: createPublisherDetails});

};
module.exports.createPublisher= createPublisher;
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const newBookSchema = new mongoose.Schema({
   name: String,
   author:String,
    authorid:{
        type:ObjectId,
        ref:"newAuthor"
    },
    publisherid:{
        type:ObjectId,
        ref:"newPublisher"
    },
	price: Number,
    ratings:Number,
	publisher: String

},{timestamps: true});
module.exports= mongoose.model("newBookS", newBookSchema);
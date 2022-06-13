const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {type: ObjectId,
    ref: "userdata"},
	productId:{ type: ObjectId,
    ref:"Product"},
	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date
}, {timestamps: true});
 module.exports= mongoose.model("Order", orderSchema);

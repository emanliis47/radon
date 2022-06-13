const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
	category:["Book", "Pen", "Pencile", "Easer"],
	price:{ type: Number,
    require: true}
},{timestamps: true})
module.exports= mongoose.model("Product", productSchema);
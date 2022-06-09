const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: String,
    author_id:Number,
    price:Number,
    ratings: String,
},

{timestamps: true })
module.exports = mongoose.model('Books', bookSchema)
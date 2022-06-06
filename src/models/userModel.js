const mongoose = require('mongoose');

 const bookSchema =  mongoose.Schema ({
     bookName: String,
    authorName: String,
     category: String,
     year: Number },{timestamps: true})

module.exports = mongoose.model('Book', bookSchema)
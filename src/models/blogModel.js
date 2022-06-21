const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: objectId,
        ref: "author",
        required: true
    },
    tags: [String],

    catagory: {
        type: String,
        required: true
    },
    subcategory: {
        type: [String]
    },
    isdeleted: {
        type: Boolean,
        default: false
    }, 
    isPublished: {boolean, default: false}
}, {
    timestamps: true
})
module.exports = new mongoose.model("Blog", blogSchema)
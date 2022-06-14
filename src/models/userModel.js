const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Fname:{type: String,
        require:true },
    Lname: String,
	EmailId:{type: String,
        require:true },
    Password:{type: String,
        require:true },
	Age: Number,
 	Gender:{ 
        type: String,
        enum: ["female", "male", "other"]
    }
	
},{timestamps: true});

module.exports = mongoose.model('NewUser', userSchema);

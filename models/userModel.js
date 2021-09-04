const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
        
    },
    email: {
        type: String,
        required : true,
        // unique: true
        // trim: true,
        // lowercase: true,
    },
    password: {
        type: String,
        required : true
        // minlength: 7
        // trim: true,
    },
    isAdmin :{
        type : Boolean,
        required : true,
        default : false
    }

},{
    timestamps : true,
})

module.exports = mongoose.model('users', userSchema)
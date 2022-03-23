const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    contactNumber: {
        type:Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    coursesTaken: [],
    
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
});

const userModel = mongoose.model("", userSchema);

module.exports = userModel;
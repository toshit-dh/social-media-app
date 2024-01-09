const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,"Email Is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password Is Required"],
    }
})
module.exports = mongoose.model("Users" ,userSchema)
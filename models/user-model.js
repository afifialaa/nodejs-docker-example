const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
}, {timestamps:true})

let User = mongoose.model('User', UserSchema);

module.exports = User

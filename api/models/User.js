const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        image: {type: String, default: "https://via.placeholder.com/250x250"},       
        followers: {type: String, default: 0},
        following: {type: String, default: 0},
    }
)

module.exports = mongoose.Schema('User', UserScheme);
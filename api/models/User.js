const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserScheme = new Schema({
    username: String,  
    name: String, 
    email: String,  
    password: String,
    image: { type: String, default: "Date.now" },  
    followers: { type: String, default: "Date.now" }, 
    following: { type: String, default: "Date.now" }, 
});

module.exports = mongoose.model('User', UserScheme);
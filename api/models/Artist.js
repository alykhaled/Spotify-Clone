const mongoose = require('mongoose');
const Album = require('./Album');

const ArtistScheme = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        name: {type: String, required: true},        
        email: String,
        password: {type:String,select: false},
        profileImage: {type: String, default: "https://via.placeholder.com/250x250"},       
        followers: {type: String, default: 0},
        albums:[{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
    }
)

module.exports = mongoose.model('Artist', ArtistScheme);
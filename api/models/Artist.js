const mongoose = require('mongoose');

const ArtistScheme = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        name: {type: String, required: true},        
        image: {type: String, default: "https://via.placeholder.com/250x250"},       
        followers: {type: String, default: 0},
        albums:[{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
    }
)

module.exports = mongoose.Schema('Artist', ArtistScheme);
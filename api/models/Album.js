const mongoose = require('mongoose');

const AlbumScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, default: "https://via.placeholder.com/250x250"},       
        link: {type: String, required: false},
        artist: {type: mongoose.Schema.Types.ObjectId , ref: 'Artist',required: false},
        year: {type: String, required: false},
    }
)

module.exports = mongoose.model('Album', AlbumScheme);
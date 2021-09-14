const mongoose = require('mongoose');

const TrackScheme = new mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, default: "https://via.placeholder.com/250x250"},       
        link: {type: String, required: false},
        track_number: {type: String, required: false},
        artist: {type: mongoose.Schema.Types.ObjectId , ref: "Album",required: false}
    }
)

module.exports = mongoose.model('Track', TrackScheme);
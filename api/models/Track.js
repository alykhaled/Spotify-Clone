const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema(
    {
        name: {type: String, required: false},
        image: {type: String, default: "https://via.placeholder.com/250x250", required: false},       
        link: {type: String, required: false},
        track_number: {type: String, required: false},
        album: {type: mongoose.Schema.Types.ObjectId , ref: "Album",required: false},
        artist: {type: mongoose.Schema.Types.ObjectId , ref: "Artist",required: false},
        played_times: {type: String, default: "0", required: false},
        duration: {type: String, default: "0", required: false},
        
    }
);

module.exports = mongoose.model('Track', TrackSchema);
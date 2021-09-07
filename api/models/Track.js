const mongoose = require('mongoose');

const TrackScheme = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        image: {type: String, default: "https://via.placeholder.com/250x250"},       
        link: {type: String, required: false},
    }
)

module.exports = mongoose.Schema('Track', TrackScheme);
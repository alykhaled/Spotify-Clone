const router = require('express').Router();
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const verify = require('../verifyToken');
const mongoose = require('mongoose');


//Create
router.post("/",async (req,res) => {
    const newAlbum = new Album({
        name:req.body.name,
        image:req.body.image,
        link:req.body.link,
        artist: req.body.artist,
        year: req.body.year
    });

    try 
    {
        const Album = await newAlbum.save();
        const artist = await Artist.findById(Album.artist);
        const artistAlbums = artist.albums;
        artistAlbums.unshift(Album);
        const artistNew = await Artist.findByIdAndUpdate(Album.artist, {albums: artistAlbums}, {new: true})
        console.log(artistNew);
        res.status(200).send(Album);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
});

//GET
router.get("/" ,async (req,res) => {
    const query = req.query.artistId;
    try 
    {
        let list = [];
        list = await Album.aggregate([{ $match: {artist: mongoose.Types.ObjectId(query)} }]);
        res.status(200).send(list);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});
module.exports = router;
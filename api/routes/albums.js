const router = require('express').Router();
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const Track = require('../models/Track');
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
        await Artist.findByIdAndUpdate(req.body.artist,{ $addToSet: { albums: Album.id }});

        res.status(200).send(Album);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
});

//GET
router.get("/:id" ,async (req,res) => {
    try 
    {
        const album = await Album.findById(req.params.id).populate("tracks");
        res.status(200).send(album);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

//GET Tracks
router.get("/:id/tracks" ,async (req,res) => {
    // let list = [];
    try 
    {
        // list = await Track.aggregate([{ $match: {album: mongoose.Types.ObjectId(req.params.id)} }]);
        const list = await Album.findById(req.params.id).select("tracks").populate("tracks");
        res.status(200).send(list.tracks);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});



module.exports = router;
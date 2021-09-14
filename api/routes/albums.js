const router = require('express').Router();
const Album = require('../models/Album');
const verify = require('../verifyToken');

//Create
router.post("/" ,verify,async (req,res) => {
    const newAlbum = new Album({
        name:req.body.name,
        image:req.body.image,
        link:req.body.link,
        artist: req.body.artist,
    });

    try 
    {
        const Album = await newAlbum.save();
        res.status(200).send(Album);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
});
module.exports = router;
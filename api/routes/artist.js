const router = require('express').Router();
const Artist = require('../models/Artist');
const Album = require('../models/Album');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');
const mongoose = require('mongoose');

//Create
router.post("/" ,verify,async (req,res) => {
    const newArtist = new Artist({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        profileImage: req.body.profileImage,
    });

    try 
    {
        const artist = await newArtist.save();
        res.status(200).send(artist);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
});

//GET Top artist
router.get("/top" ,async (req,res) => {
    try 
    {
        const topArtist = await Artist.find().populate("albums","-tracks").select("-password");
        res.status(200).send(topArtist);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
});

//GET albums
router.get("/:id/albums" ,async (req,res) => {
    try 
    {
        const albums = await Artist.findById(req.params.id).populate("albums",["-tracks","-artist"]).select("albums");
        res.status(200).send(albums.albums);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

//GET artist
router.get("/:id" ,async (req,res) => {
    try 
    {
        const artist = await Artist.findById(req.params.id).populate("albums","-tracks").select("-password");
        res.status(200).send(artist);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

//TODO: GET artist's top tracks

//TODO: GET artist's related artists

module.exports = router;
const router = require('express').Router();
const Track = require('../models/Track');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');
const mongoose = require('mongoose');
const Album = require('../models/Album');

//Create
router.post("/" ,async (req,res) => {
    const newTrack = new Track({
        name:req.body.name,
        image:req.body.image,
        link:req.body.link,
        track_number:req.body.track_number,
        album: req.body.album,
        artist: req.body.artist,
        played_times: req.body.played_times,
        duration: req.body.duration
    });

    try 
    {
        const track = await newTrack.save();
        await Album.findByIdAndUpdate(req.body.album,{ $addToSet: { tracks: track.id }});
        res.status(200).send(track);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
});

//GET
router.get("/:id" ,async (req,res) => {
    try 
    {
        const track = await Track.findById(req.params.id).populate("album").populate("artist");
        res.status(200).send(track);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

// //UPDATE
// router.put("/:id" ,verify,async (req,res) => {
//     if (req.body.id === req.params.id ) 
//     {
//         if(req.body.password)
//         {
//             req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
//         }
//         try 
//         {
//             const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
//             res.status(200).send(updatedUser);
//         } 
//         catch (error) 
//         {
//             res.status(500).send(error);
//         }
     
//     }
//     else {
//         res.status(403).send("You can only update your account!");

//     }
// });

// //DELETE
// router.delete("/:id" ,verify,async (req,res) => {
//     if (req.body.id === req.params.id ) 
//     {
//         try 
//         {
//             await User.findByIdAndDelete(req.params.id);
//             res.status(200).send("User Deleted!");
//         } 
//         catch (error) 
//         {
//             res.status(500).send(error);
//         }
     
//     }
//     else {
//         res.status(403).send("You can only update your account!");

//     }
// });

//GET
// router.get("/find/:id" ,async (req,res) => {
//     try 
//     {
//         const artist = await Artist.findById(req.params.id);
//         const { password,email, ...info } = artist._doc;
//         res.status(200).send(info);
//     } 
//     catch (error) 
//     {
//         res.status(500).send(error);
//     }
// });
// // //Get all
// router.get("/top" ,async (req,res) => {
//     try 
//     {
//         const topArtist = await Artist.find();
//         topArtist.forEach(artist => {
//             const { password, ...info } = artist._doc;
//             artist._doc = info;
//         });
//         res.status(200).send(topArtist);
//     } 
//     catch (error) 
//     {
//         res.status(500).send(error);
//     }
// });
module.exports = router;
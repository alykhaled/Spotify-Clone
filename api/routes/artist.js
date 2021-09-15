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

router.get("/top" ,async (req,res) => {
    try 
    {
        const topArtist = await Artist.find().populate("albums");
        topArtist.forEach(artist => {
            const { password, ...info } = artist._doc;
            artist._doc = info;
        });
        res.status(200).send(topArtist);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
});

//GET artist
router.get("/:id" ,async (req,res) => {
    try 
    {
        const artist = await Artist.findById(req.params.id).populate("albums");
        const { password, ...info } = artist._doc;
        res.status(200).send(info);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});



//GET albums
router.get("/:id/albums" ,async (req,res) => {
    try 
    {
        let list = [];
        list = await Album.aggregate([{ $match: {artist: mongoose.Types.ObjectId(req.params.id)} }]);
        res.status(200).send(list);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

//TODO: GET artist's top tracks

//TODO: GET artist's related artists

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

// //Get all
module.exports = router;
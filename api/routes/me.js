const router = require('express').Router();
const {Track} = require('../models/Track');
const Artist = require('../models/Artist');
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');
const mongoose = require('mongoose');
const Album = require('../models/Album');

//Play track
router.put("/play/:id" ,verify,async (req,res) => {
    try 
    {
        // console.log(req.user._id);
        const track = await Track.findById(req.params.id);
        const user = await User.findById(req.user._id);
        const obj = {};
        obj["context"] = {};
        obj.context["type"] = req.body.type;
        if (req.body.type === "Artist" ) 
        {
            const artist = await Artist.findById(req.body.id);
            obj.context["artist"] = artist;
        } 
        else if(req.body.type === "Album") 
        {
            const album = await Album.findById(req.body.id);
            obj.context["album"] = album;
        }
        else 
        {
            const playlist = await Artist.findById(req.body.id);
            obj.context["playlist"] = playlist;
        }
        obj["track"] = req.params.id;
        // for(var k in track._doc) obj[k]=track._doc[k];
        // console.log(obj);
        user.recentlyPlayed.unshift(obj);
        user.save();
        res.status(200).send(user);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
});

//GET Me
router.get("/", verify ,async (req,res) => {
    try 
    {
        console.log(req.user._id);
        const user = await User.findById(req.user._id).populate({
            path:"recentlyPlayed",
            populate:{
                path:"context.album",
                model:"Album"
            }
        }).populate({
            path:"recentlyPlayed",
            populate:{
                path:"track",
                model:"Track"
            }
        });
        res.status(200).send(user);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

//GET Me
router.get("/recent", verify ,async (req,res) => {
    try 
    {
        console.log(req.user._id);
        const user = await User.findById(req.user._id).populate({
            path:"recentlyPlayed",
            populate:{
                path:"context.album",
                model:"Album"
            }
        }).populate({
            path:"recentlyPlayed",
            populate:{
                path:"track",
                model:"Track"
            }
        }).populate({
            path:"recentlyPlayed",
            populate:{
                path:"track",
                populate:{
                    path:"artist",
                    model:"Artist"
                }
            }
        });
        await user.populate({
            path:"recentlyPlayed",
            populate:{
                path:"track.album",
                model:"Album"
            }
        });;
        res.status(200).send(user.recentlyPlayed);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send(error);
    }
    
});

module.exports = router;
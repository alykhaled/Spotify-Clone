const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const verify = require('../verifyToken');

//UPDATE
router.put("/:id" ,verify,async (req,res) => {
    if (req.body.id === req.params.id ) 
    {
        if(req.body.password)
        {
            req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }
        try 
        {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).send(updatedUser);
        } 
        catch (error) 
        {
            res.status(500).send(error);
        }
     
    }
    else {
        res.status(403).send("You can only update your account!");

    }
});

//DELETE
router.delete("/:id" ,verify,async (req,res) => {
    if (req.body.id === req.params.id ) 
    {
        try 
        {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).send("User Deleted!");
        } 
        catch (error) 
        {
            res.status(500).send(error);
        }
     
    }
    else {
        res.status(403).send("You can only update your account!");

    }
});

//GET
router.get("/find/:id" ,async (req,res) => {
    try 
    {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).send(info);
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
    
});
//Get all

module.exports = router;
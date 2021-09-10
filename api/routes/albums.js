const router = require('express').Router();
const Album = require('../models/Album');
const verify = require('../verifyToken');

//Create
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
router.delete("/find/:id" ,verify,async (req,res) => {
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
//Get all

module.exports = router;
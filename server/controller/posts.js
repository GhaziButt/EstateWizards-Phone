const express = require("express");
const Post = require('../models/posts.js');
const User = require('../models/user.js');


exports.createPost = async (req , res) => {
    
    try{
    
        var { type,propertytype,housetype,title, description, location,area, rooms, bathrooms, price,pictures } = req.body;

        const user = await User.findById(req.user.id).select("-password")
    
        var post = new Post({type,propertytype,housetype,title, description, location,area, rooms, bathrooms, price,pictures, phoneno: user.phoneno, email: user.email, user: req.user.id });

        console.log(post)
        await post.save();
        res.status(200).json({success:true});

    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error.message)
    }
}


exports.viewAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        console.log("T");        
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}
 

exports.findByLocation = async (req, res) => {
    try {
        const Lposts = await Post.find({ location: 'Rawalpindi'});
        console.log("T");        
        res.status(200).json(Lposts);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

exports.findByType = async (req, res) => {
    try {
        const Lposts = await Post.find({ type: 'Flat'});
        console.log("Tatta");        
        res.status(200).json(Lposts);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

exports.myPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id });
        console.log("Tatta");        
        res.status(200).json(posts);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
} 

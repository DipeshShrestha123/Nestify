const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res) => {
    // Handle sign up logic here
    try {
        const {username ,email , password} = req.body;
        const hashpassword =  await bcrypt.hash(password,10);
    
        const newUser = new User({
        username: username,
        email : email,
        password : hashpassword
    });
    await newUser.save();
    res.status(201).json({message : "User Created Successfully"});
} catch(err){
    console.log(err);
    res.status(500).json({message : "User Creation Failed"});
    }
};

const LogIn = async (req, res) => {

    try{
        const {username , password} = req.body;

        const user = await User.findOne({
            username
        });
        if(!user){
            console.log("user not found");
            return res.status(404).json({message : "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            console.log("invalid credential");
            return res.status(401).json({message : "Invalid credentials"});
        }

        // cookie genrate
        const payload = {
            user_id : user._id,
            Username : user.username
        }
        const Age = 1000*60*60*24*7;

        const token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
            expiresIn : Age,

        });
        res.cookie("token",token,{
            httpOnly : true,
            maxAge : Age,
        });
        res.status(200).json({message : "User login Success"});

    }catch(err){
        console.log(err);
        res.status(500).json({message : "User login Failed"});
    }

};

const LogOut = async (req,res) => {
    try{
        res.clearCookie("token");
        res.status(200).json({message : "User logout Success"});
    }catch(err){
        console.log(err);
        res.status(500).json({message : "User logout Failed"});
    }
    
};

module.exports = { SignUp, LogIn, LogOut };

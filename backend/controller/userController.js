const mongoose = require('mongoose')

const User = require('../model/User')

const saveUser = async (req,res)=> {
    try{
    const user = await new User(req.body).save()
    res.status(201).json(user)
    }
    catch(err)
    {
        res.status(401).json("Invalid Credentials")
    }
}

const getUsers = async (req,res)=> {
    try{
    const users = await User.find({})
    res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).json("Not Found")
    }
}

module.exports = {saveUser,getUsers}
const mongoose = require('mongoose')

const User = require('../model/User')

const saveUser = async (req,res)=> {
    const user = await new User(req.body).save()
    return res.status(201).json(user)
}

const getUsers = async (req,res)=> {
    const users = await User.find({})
    return res.status(200).json(users)
}

module.exports = {saveUser,getUsers}
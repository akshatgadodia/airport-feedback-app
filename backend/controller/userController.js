const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const User = require('../model/User')

const saveUser = asyncHandler(async (req, res, next)=> {
    const user = await new User(req.body).save()
    res.status(201).json({
        success : true,
        data : user
    })
});

const getUsers = asyncHandler(async (req, res, next)=> {
    const users = await User.find({})
    res.status(200).json({
        success : true,
        data : users
    })
});

module.exports = {saveUser,getUsers}
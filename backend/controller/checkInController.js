const mongoose = require('mongoose')

const CheckIn = require('../model/CheckIn')

const saveCheckInFeedback = async (req,res)=> {
    try{
    const checkIn = await new CheckIn(req.body).save()
    return res.status(201).json(checkIn)
    }
    catch(err)
    {
        res.status(401).send("Invalid Credentials")
    }
}

const getCheckInFeedbacks = async (req,res)=> {
    try{
    const users = await CheckIn.find({})
    return res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).send("Not Found")
    }
}

module.exports = {saveCheckInFeedback,getCheckInFeedbacks}
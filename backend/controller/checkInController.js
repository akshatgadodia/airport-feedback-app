const mongoose = require('mongoose')

const CheckIn = require('../model/CheckIn')

const saveCheckInFeedback = async (req,res)=> {
    const checkIn = await new CheckIn(req.body).save()
    return res.status(201).json(checkIn)
}

const getCheckInFeedbacks = async (req,res)=> {
    const users = await CheckIn.find({})
    return res.status(200).json(users)
}

module.exports = {saveCheckInFeedback,getCheckInFeedbacks}
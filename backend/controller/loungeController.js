const mongoose = require('mongoose')

const Lounge = require('../model/Lounge')

const saveLoungeFeedback = async (req,res)=> {
    const FoodCourt = await new Lounge(req.body).save()
    return res.status(201).json(FoodCourt)
}

const getLoungeFeedbacks = async (req,res)=> {
    const users = await Lounge.find({})
    return res.status(200).json(users)
}

module.exports = {saveLoungeFeedback,getLoungeFeedbacks}
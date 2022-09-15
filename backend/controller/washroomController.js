const mongoose = require('mongoose')

const Washroom = require('../model/Washroom')

const saveWashroomFeedback = async (req,res)=> {
    const FoodCourt = await new Washroom(req.body).save()
    return res.status(201).json(FoodCourt)
}

const getWashroomFeedbacks = async (req,res)=> {
    const users = await Washroom.find({})
    return res.status(200).json(users)
}

module.exports = {saveWashroomFeedback,getWashroomFeedbacks}
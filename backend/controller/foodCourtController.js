const mongoose = require('mongoose')

const FoodCourt = require('../model/FoodCourt')

const saveFoodCourtFeedback = async (req,res)=> {
    const FoodCourt = await new FoodCourt(req.body).save()
    return res.status(201).json(FoodCourt)
}

const getFoodCourtFeedbacks = async (req,res)=> {
    const users = await FoodCourt.find({})
    return res.status(200).json(users)
}

module.exports = {saveFoodCourtFeedback,getFoodCourtFeedbacks}
const mongoose = require('mongoose')

const FoodCourt = require('../model/FoodCourt')

const saveFoodCourtFeedback = async (req,res)=> {
    try{
        console.log(req.body);
    const foodCourt = await new FoodCourt(req.body).save()
    res.status(201).json(foodCourt)
    }
    catch(err)
    {
        console.log(err)
        res.status(401).send("Not Found")
    }
}

const getFoodCourtFeedbacks = async (req,res)=> {
    try{
    const users = await FoodCourt.find({})
    res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).send("Not Found")
    }
}

module.exports = {saveFoodCourtFeedback,getFoodCourtFeedbacks}
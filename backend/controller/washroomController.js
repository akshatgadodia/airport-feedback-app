const mongoose = require('mongoose')

const Washroom = require('../model/Washroom')

const saveWashroomFeedback = async (req,res)=> {
    try{
    const FoodCourt = await new Washroom(req.body).save()
    res.status(201).json(FoodCourt)
    }
    catch(err)
    {
        res.status(401).json("Invalid Credentials")
    }
}

const getWashroomFeedbacks = async (req,res)=> {
    try{
    const users = await Washroom.find({})
    res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).json("Not Found")
    }
}

module.exports = {saveWashroomFeedback,getWashroomFeedbacks}
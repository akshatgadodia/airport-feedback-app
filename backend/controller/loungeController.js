const mongoose = require('mongoose')

const Lounge = require('../model/Lounge')

const saveLoungeFeedback = async (req,res)=> {
    try{
    const FoodCourt = await new Lounge(req.body).save()
    res.status(201).json(FoodCourt)
    }
    catch(err)
    {
        res.status(401).json("Invalid Credentials")
    }
}

const getLoungeFeedbacks = async (req,res)=> {
    try{
    const users = await Lounge.find({})
    return res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).json("Not found")
    }
}

module.exports = {saveLoungeFeedback,getLoungeFeedbacks}
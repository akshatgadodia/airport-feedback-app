const mongoose = require('mongoose')

const Store = require('../model/Store')

const saveStoreFeedback = async (req,res)=> {
    try{
    const FoodCourt = await new Store(req.body).save()
    res.status(201).json(FoodCourt)
    }
    catch(err)
    {
        res.status(401).json("Invalid Credentials")
    }
}

const getStoreFeedbacks = async (req,res)=> {
    try{
    const users = await Store.find({})
    res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).json("Not Found")
    }
}

module.exports = {saveStoreFeedback,getStoreFeedbacks}
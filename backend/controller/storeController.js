const mongoose = require('mongoose')

const Store = require('../model/Store')

const saveStoreFeedback = async (req,res)=> {
    const FoodCourt = await new Store(req.body).save()
    return res.status(201).json(FoodCourt)
}

const getStoreFeedbacks = async (req,res)=> {
    const users = await Store.find({})
    return res.status(200).json(users)
}

module.exports = {saveStoreFeedback,getStoreFeedbacks}
const mongoose = require('mongoose')

const HelpDesk = require('../model/HelpDesk')

const saveHelpDeskFeedback = async (req,res)=> {
    const FoodCourt = await new HelpDesk(req.body).save()
    return res.status(201).json(FoodCourt)
}

const getHelpDeskFeedbacks = async (req,res)=> {
    const users = await HelpDesk.find({})
    return res.status(200).json(users)
}

module.exports = {saveHelpDeskFeedback,getHelpDeskFeedbacks}
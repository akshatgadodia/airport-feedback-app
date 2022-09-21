const mongoose = require('mongoose')

const HelpDesk = require('../model/HelpDesk')

const saveHelpDeskFeedback = async (req,res)=> {
    try{
    const FoodCourt = await new HelpDesk(req.body).save()
    res.status(201).json(FoodCourt)
    }
    catch(err)
    {
        res.status(401).json("Invalid Credentials")
    }
}

const getHelpDeskFeedbacks = async (req,res)=> {
    try{
    const users = await HelpDesk.find({})
    return res.status(200).json(users)
    }
    catch(err)
    {
        res.status(404).json("Not Found")
    }

}

module.exports = {saveHelpDeskFeedback,getHelpDeskFeedbacks}
const mongoose = require('mongoose')

const Airline = require('../model/Airline')

const saveAirlineFeedback = async (req,res)=> {
    const airline = await new Airline(req.body).save()
    return res.status(201).json(airline)
}

const getAirlineFeedback = async (req,res)=> {
    const airlines = await Airline.find({})
    return res.status(200).json(airlines)
}

module.exports = {saveAirlineFeedback,getAirlineFeedback}
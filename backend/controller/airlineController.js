const mongoose = require('mongoose')

const Airline = require('../model/Airline')

const saveAirlineFeedback = async (req,res)=> {
    try{
    const airline = await new Airline(req.body).save()
    res.status(201).json(airline)
    }
    catch(err)
    {
        res.status(401).send("Invalid Credentials")
    }
}

const getAirlineFeedback = async (req,res)=> {
    try{
    const airlines = await Airline.find({})
    return res.status(200).json(airlines)
    }
    catch(err)
    {
        res.status(404).send("Not Found")
    }
}

module.exports = {saveAirlineFeedback,getAirlineFeedback}
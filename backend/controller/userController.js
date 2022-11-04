const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/errorResponse') 
const User = require('../model/User')
const Ticket = require('../model/Ticket'); 

const saveUser = asyncHandler(async (req, res, next)=> {
    const ticket = await Ticket.findOne({PNR:req.body.pnr})
        // .then(async function (err, ticket) {
        // if (err) return next(new ErrorResponse("An Error Occurred!",500));
        // Prints "Space Ghost is a talk show host".
        console.log(ticket);
        if(ticket === null) return next(new ErrorResponse("PNR doesn't exists. Please check and try again.",404));
        // const user=await new User(req.body)
        // console.log(user);
        res.status(201).json({
        success : true,
        data : ticket
        })
    //   });
});

const getUsers = asyncHandler(async (req, res, next)=> {
    const users = await User.find({})
    res.status(200).json({
        success : true,
        data : users
    })
});

module.exports = {saveUser,getUsers}
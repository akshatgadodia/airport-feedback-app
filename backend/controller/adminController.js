const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Admin = require('../model/Admin')

const saveAdmin = asyncHandler(async (req, res, next)=> {
        const admin = await new Admin(req.body).save()
        res.status(201).json({
            success : true,
            data : admin
        })
});

const getAdmin = asyncHandler(async (req, res, next)=> {
    const admin = await Admin.find({})
    res.status(200).json({
        success : true,
        data : admin
    })
});

module.exports = {saveAdmin,getAdmin}
const mongoose = require("mongoose");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

const Admin = require("../model/Admin");

const saveAdmin = asyncHandler(async (req, res, next) => {
  const admin = await new Admin(req.body).save();
  res.status(201).json({
    success: true,
    data: admin,
  });
});

const getAdmin = asyncHandler(async (req, res, next) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (admin.password === req.body.password) {
    res.status(200).json({
      success: true,
      data: admin,
    });
  } else {
    return next(new ErrorResponse("Invalid Login Details", 404));
  }
});

module.exports = { saveAdmin, getAdmin };

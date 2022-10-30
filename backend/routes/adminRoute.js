const express = require('express')

const router = express.Router()

const {saveAdmin,getAdmin} = require('../controller/adminController')

router.post('/signup',saveAdmin)
router.get('/signin',getAdmin)

module.exports = router
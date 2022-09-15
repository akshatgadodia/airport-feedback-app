const express = require('express')

const router = express.Router()

const {saveAirlineFeedback,getAirlineFeedback} = require('../controller/airlineController')

router.post('/',saveAirlineFeedback)
router.get('/',getAirlineFeedback)

module.exports = router
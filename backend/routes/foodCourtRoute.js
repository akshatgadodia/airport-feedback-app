const express = require('express')

const router = express.Router()

const {saveFoodCourtFeedback,getFoodCourtFeedbacks} = require('../controller/foodCourtController')

router.post('/',saveFoodCourtFeedback)
router.get('/',getFoodCourtFeedbacks)

module.exports = router
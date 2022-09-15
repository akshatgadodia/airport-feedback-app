require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database/connection')

const airlineRoutes = require('./routes/airlineRoute')
const checkInRoutes = require('./routes/checkInRoute')
const foodCourtRoutes = require('./routes/foodCourtRoute')
const helpDeskRoutes = require('./routes/helpDeskRoute')
const loungeRoutes = require('./routes/loungeRoute')
const storeRoutes = require('./routes/storeRoute')
const userRoutes = require('./routes/userRoute')
const washroomRoutes = require('./routes/washroomRoute')

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//app.use('/api/airline',airlineRoutes)
//app.use('/api/checkin',checkInRoutes)
//app.use('/api/foodcourt',foodCourtRoutes)
//app.use('/api/helpdesk',helpDeskRoutes)
//app.use('/api/lounge',loungeRoutes)
//app.use('/api/store',storeRoutes)
//app.use('/api/user',userRoutes)
//app.use('/api/washroom',washroomRoutes)


app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db')

const errorHandler = require('./middleware/errorHandler');

const adminRoutes = require('./routes/adminRoute')
const airlineRoutes = require('./routes/airlineRoute')
const checkInRoutes = require('./routes/checkInRoute')
const foodCourtRoutes = require('./routes/foodCourtRoute')
const helpDeskRoutes = require('./routes/helpDeskRoute')
const loungeRoutes = require('./routes/loungeRoute')
const storeRoutes = require('./routes/storeRoute')
const userRoutes = require('./routes/userRoute')
const washroomRoutes = require('./routes/washroomRoute');
const airlinesRoutes = require('./routes/airlinesRoute')
const storesRoutes = require('./routes/storesRoute')
const loungesRoutes = require('./routes/loungesRoute')

connectDb();

const app = express();
const port = process.env.port || 5000;

// Middleware
app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})


// Routes
app.use('/api/admin',adminRoutes)
app.use('/api/airline',airlineRoutes)
app.use('/api/checkin',checkInRoutes)
app.use('/api/foodcourt',foodCourtRoutes)
app.use('/api/helpdesk',helpDeskRoutes)
app.use('/api/lounge',loungeRoutes)
app.use('/api/store',storeRoutes)
app.use('/api/user',userRoutes)
app.use('/api/washroom',washroomRoutes)
app.use('/api/airlines',airlinesRoutes)
app.use('/api/lounges',loungesRoutes)
app.use('/api/stores',storesRoutes)


// Error Handler
app.use(errorHandler)


app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

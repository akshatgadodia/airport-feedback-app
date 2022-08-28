const mongoose = require('mongoose');

const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}
            @cluster0.3v0mjk6.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DB)
    .then(()=>{
        console.log("Connection to database successful")
    })
    .catch((err) => {
        console.log(err)
    })

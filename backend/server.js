require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database/connection')

const app = express();
const port = process.env.port || 5000;

const user = require('./model/User')

app.use(cors())
app.use(express.json())

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

app.get('/',async (req,res) => {
    res.send("HELLO");
    u = {'name':'Akshat Gadodia','email':'akshatgadodia@gmail.com','mobilenumber':7737152961,'pnr':'qwertyuiop'}
    console.log(await new user(u).save())

})
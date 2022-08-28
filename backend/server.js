require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database/connection')

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

app.get('/',(req,res) => {
    res.send("HELLO");
})
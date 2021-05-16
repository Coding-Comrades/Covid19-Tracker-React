const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;



// Middelware 
const middleware = (req,res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

// app.get('/', (req, res) => {
//     res.send(`Hello world from the server app.js`);
// });


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


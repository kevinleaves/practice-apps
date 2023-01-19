require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const Router = require('./routes.js')

const app = express();

// you just created your own routing middleware
app.use(express.json())
app.use('/api', Router);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(morgan('combined'));


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);


// module.exports = Router;
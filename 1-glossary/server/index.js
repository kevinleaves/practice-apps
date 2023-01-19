require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require('morgan');
const controller = require('../controllers/words.js')

const Router = express.Router()

const app = express();
// app.use('/api', Router);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(morgan('combined'));
app.use(express.json())

app.get('/api/words', controller.get)
app.post('/api/words', controller.post)
app.patch('/api/words', controller.patch)
app.delete('api/words', controller.delete)


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);


module.exports = Router;
const express = require('express')
const Router = express.Router();
const controller = require('../controllers/checkout.js')


// Router.get()
Router.post('/checkout', controller.post)

module.exports = Router
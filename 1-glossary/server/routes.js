const Router = require('./index.js')
const controller = require('../controllers/words.js')

Router.get('/words', controller.get)
Router.post('/words', controller.post)
Router.patch('/words', controller.patch)
Router.delete('/words', controller.delete)

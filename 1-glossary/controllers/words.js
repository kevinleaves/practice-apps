const model = require('../models/words.js')

module.exports = {
  get: function (req, res) {
    console.log(req, 'req in controller')
    model.getAll()
      .then((words) => {
        res.status(200).json(words)
      })
      .catch((err) => {
        console.log(err, 'get err')
        res.sendStatus(404)
      })
  },

  post: function (req, res) {
    console.log(req.body, 'body')
    model.insert(req.body)
      .then((word) => {
        res.status(201).json(word);
      })
      .catch((err) => {
        console.log('post err')
        res.sendStatus(404)
      })
    // console.log(req)
  },

  patch: function (req, res) {
    console.log(req.body, 'patchreqbody')
    model.update(req.body)
      .then ((foundEntry) => {
        res.status(200).json(foundEntry)
      })
      .catch((err) => {
        console.log(err, 'err patching')
        res.sendStatus(404)
      })
  },

  delete: function (req, res) {
    console.log('hi')
    console.log(req)
  },
}
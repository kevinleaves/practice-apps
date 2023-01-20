const model = require('../models/words.js')

module.exports = {
  get: function (req, res) {
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
    model.insert(req.body)
      .then((word) => {
        res.status(201).json(word);
      })
      .catch((err) => {
        console.log('post err')
        res.sendStatus(404)
      })
  },

  patch: function (req, res) {
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
    model.delete(req.body)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err, 'err delete')
        res.sendStatus(404)
      })
  },
}
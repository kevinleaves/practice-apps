const model = require('../models/checkout.js')

module.exports = {

  post: function (req, res) {
    console.log(req, 'req')
    // console.log(req.body, 'reqbody')
    model.insert(req.body)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(400)
      })
  },
}
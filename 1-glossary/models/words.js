const Word = require('../server/db.js')

module.exports = {
  getAll: function () {
    console.log('getAll is running')
    return new Promise ((resolve, reject) => {
      Word.find({}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },

  insert: function (params) {
    console.log(params, params)
    return new Promise((resolve, reject) => {
      Word.create(params, (err, document) => {
        if (err) {
          reject(err)
        } else {
          resolve(document)
        }
      })
    })
  },

  update: function () {

  },

  delete: function () {

  }
}
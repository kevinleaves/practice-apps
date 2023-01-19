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

  insert: function () {

  },

  update: function () {

  },

  delete: function () {

  }
}
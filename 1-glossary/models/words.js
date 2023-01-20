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

  update: function (params) {
    const query = {_id: params._id}
    const updated = {
      $set: {
        term: params.term,
        definition: params.definition
      }
    }
    return new Promise ((resolve, reject) => {
      Word.findOneAndUpdate(query, updated, (err, foundEntry) => {
        if (err) reject(err)
        resolve(foundEntry)
      })
    })
  },

  delete: function () {

  }
}

// db.words.findOneAndUpdate({term: 'updated'}, {$set: {term: 'updated2', definition: "updated3"}})
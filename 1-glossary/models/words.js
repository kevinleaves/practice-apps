const Word = require('../server/db.js')

module.exports = {
  getAll: function () {
    return Word.find({})
  },

  insert: function (params) {
    return Word.create(params)
  },

  update: function (params) {
    const query = {_id: params._id}
    const updated = {
      $set: {
        term: params.term,
        definition: params.definition
      }
    }
    return Word.findOneAndUpdate(query, updated)
  },

  delete: function (params) {
    return Word.findByIdAndDelete(params._id)
  }
}

// db.words.findOneAndUpdate({term: 'updated'}, {$set: {term: 'updated2', definition: "updated3"}})
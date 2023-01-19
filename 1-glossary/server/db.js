const mongoose = require("mongoose");
const db = mongoose.createConnection('mongodb://localhost:27017/glossary')
// 1. Use mongoose to establish a connection to MongoDB

// 2. Set up any schema and models needed by the app
const wordSchema = new Schema ({
  term: {type: String},
  defintion: {type: String},
});

const Word = db.model('Word', wordSchema)

// 3. Export the models
// 4. Import the models into any modules that need them

module.exports.Word = Word;